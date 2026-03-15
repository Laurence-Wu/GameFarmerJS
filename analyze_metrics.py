#!/usr/bin/env python
"""Analyze JS files for metrics: line_count, func_count, max_func_len, todo_count, duplicate_patterns."""

import os
import re
from pathlib import Path

def count_functions(content):
    """Count functions and find max function length."""
    func_pattern = r'(?:function\s+(\w*)\s*\([^)]*\)|const\s+(\w+)\s*=\s*(?:function|\([^)]*\)\s*=>|\w+\s*=>))\s*\{'
    
    func_count = 0
    max_func_len = 0
    
    matches = list(re.finditer(func_pattern, content))
    
    for i, match in enumerate(matches):
        start = match.start()
        brace_count = 0
        pos = content.find('{', start)
        if pos == -1:
            continue
        brace_start = pos
        brace_count = 1
        pos += 1
        
        while pos < len(content) and brace_count > 0:
            if content[pos] == '{':
                brace_count += 1
            elif content[pos] == '}':
                brace_count -= 1
            pos += 1
        
        func_len = pos - start
        func_count += 1
        if func_len > max_func_len:
            max_func_len = func_len
    
    return func_count, max_func_len

def count_todos(content):
    """Count TODO comments."""
    return len(re.findall(r'//\s*TODO|/\*\s*TODO|\*\s*TODO', content, re.IGNORECASE))

def find_duplicate_patterns(content):
    """Find duplicate code blocks (>= 4 consecutive lines)."""
    lines = content.split('\n')
    code_lines = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped and not stripped.startswith('//') and not stripped.startswith('*'):
            code_lines.append((i, stripped))
    
    duplicates = 0
    min_block_size = 4
    
    for i in range(len(code_lines) - min_block_size + 1):
        for j in range(i + min_block_size, len(code_lines) - min_block_size + 1):
            block1 = [code_lines[i + k][1] for k in range(min_block_size)]
            block2 = [code_lines[j + k][1] for k in range(min_block_size)]
            
            if block1 == block2:
                duplicates += 1
                break
    
    return duplicates

def analyze_file(filepath):
    """Analyze a single JS file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    line_count = len(content.split('\n'))
    func_count, max_func_len = count_functions(content)
    todo_count = count_todos(content)
    duplicate_patterns = find_duplicate_patterns(content)
    
    return {
        'file': str(filepath),
        'line_count': line_count,
        'func_count': func_count,
        'max_func_len': max_func_len,
        'todo_count': todo_count,
        'duplicate_patterns': duplicate_patterns
    }

def main():
    src_dir = Path('/home/xwu/agent_playground/GameFarmerJS/src')
    js_files = list(src_dir.rglob('*.js'))
    
    results = []
    for js_file in js_files:
        metrics = analyze_file(js_file)
        results.append(metrics)
        print(f"Analyzed: {metrics['file']}")
    
    results.sort(key=lambda x: x['max_func_len'], reverse=True)
    
    print("\n=== FILE METRICS (sorted by max_func_len) ===")
    print("| file | lines | funcs | max_func_len | todos | duplicates |")
    print("|------|-------|-------|--------------|-------|------------|")
    for r in results:
        rel_path = os.path.relpath(r['file'], '/home/xwu/agent_playground/GameFarmerJS')
        print(f"| {rel_path} | {r['line_count']} | {r['func_count']} | {r['max_func_len']} | {r['todo_count']} | {r['duplicate_patterns']} |")
    
    with open('/home/xwu/agent_playground/GameFarmerJS/metrics_output.txt', 'w') as f:
        f.write("=== FILE METRICS ===\n")
        for r in results:
            rel_path = os.path.relpath(r['file'], '/home/xwu/agent_playground/GameFarmerJS')
            f.write(f"{rel_path}|{r['line_count']}|{r['func_count']}|{r['max_func_len']}|{r['todo_count']}|{r['duplicate_patterns']}\n")

if __name__ == '__main__':
    main()
