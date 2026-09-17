import React, { useState } from 'react';
import { Play, RotateCcw, BarChart2, Cpu, ArrowRight } from 'lucide-react';
import { Problem } from '../types';

interface CDsSimulatorProps {
  problem: Problem;
  showMarathi: boolean;
}

export const CDsSimulator: React.FC<CDsSimulatorProps> = ({ problem, showMarathi }) => {
  // Common states
  const [arrayInput, setArrayInput] = useState<string>('25, 12, 45, 8, 30');
  const [searchValue, setSearchValue] = useState<string>('12');
  const [replaceVal, setReplaceVal] = useState<string>('99');
  
  // Polynomial states
  const [poly1Input, setPoly1Input] = useState<string>('6x^4 + 2x^2 + 5x^1 + 3');
  const [poly2Input, setPoly2Input] = useState<string>('3x^4 + 4x^2 + 1x^1 + 7');

  // Simulation execution results
  const [simulationResult, setSimulationResult] = useState<any>(null);

  const handleRunSimulation = () => {
    switch (problem.id) {
      case 'cds-seta-1': { // Frequency in sorted array
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n))
          .sort((a, b) => a - b);
        const target = parseInt(searchValue, 10);
        let count = 0;
        nums.forEach((val) => {
          if (val === target) count++;
        });
        setSimulationResult({
          type: 'frequency',
          sortedArray: nums,
          target,
          count
        });
        break;
      }

      case 'cds-seta-2': { // Square array
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        const squared = nums.map((n) => n * n);
        setSimulationResult({
          type: 'square',
          original: nums,
          squared
        });
        break;
      }

      case 'cds-seta-3': { // Copy array
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        setSimulationResult({
          type: 'copy',
          source: nums,
          destination: [...nums]
        });
        break;
      }

      case 'cds-seta-4':
      case 'cds-setb-6': { // Bubble sort
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        
        const arr = [...nums];
        let swaps = 0;
        let comparisons = 0;
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if (arr[j] > arr[j + 1]) {
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swaps++;
            }
          }
        }

        setSimulationResult({
          type: 'sort',
          algorithm: 'Bubble Sort (Ascending)',
          original: nums,
          sorted: arr,
          swaps,
          comparisons
        });
        break;
      }

      case 'cds-seta-5': { // Insertion sort
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        
        const arr = [...nums];
        let shifts = 0;
        const n = arr.length;

        for (let i = 1; i < n; i++) {
          const key = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            shifts++;
          }
          arr[j + 1] = key;
        }

        setSimulationResult({
          type: 'sort',
          algorithm: 'Insertion Sort (Ascending)',
          original: nums,
          sorted: arr,
          swaps: shifts,
          comparisons: shifts
        });
        break;
      }

      case 'cds-seta-6': { // Selection sort
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        
        const arr = [...nums];
        let swaps = 0;
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          let minIdx = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
              minIdx = j;
            }
          }
          if (minIdx !== i) {
            const temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
            swaps++;
          }
        }

        setSimulationResult({
          type: 'sort',
          algorithm: 'Selection Sort (Ascending)',
          original: nums,
          sorted: arr,
          swaps,
          comparisons: (n * (n - 1)) / 2
        });
        break;
      }

      case 'cds-setb-1': { // Polynomial Display
        setSimulationResult({
          type: 'poly_display',
          formatted: poly1Input
        });
        break;
      }

      case 'cds-setb-2': { // Find and Replace
        const nums = arrayInput
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n));
        const s = parseInt(searchValue, 10);
        const r = parseInt(replaceVal, 10);
        let foundCount = 0;
        const replacedArr = nums.map((val) => {
          if (val === s) {
            foundCount++;
            return r;
          }
          return val;
        });

        setSimulationResult({
          type: 'replace',
          original: nums,
          searchVal: s,
          replaceVal: r,
          replacedArr,
          foundCount
        });
        break;
      }

      case 'cds-setb-3': { // Polynomial Addition
        setSimulationResult({
          type: 'poly_add',
          p1: '6x^4 + 2x^2 + 5x^1 + 3',
          p2: '3x^4 + 4x^2 + 1x^1 + 7',
          sum: '9x^4 + 6x^2 + 6x^1 + 10'
        });
        break;
      }

      case 'cds-setb-4': { // Days Insertion sort
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const sortedDays = [...days].sort((a, b) => a.localeCompare(b));
        setSimulationResult({
          type: 'string_sort',
          original: days,
          sorted: sortedDays,
          algorithm: 'Insertion Sort on String Array'
        });
        break;
      }

      case 'cds-setb-5': { // Names Bubble sort
        const names = ['Rahul', 'Amit', 'Pooja', 'Deepak', 'Savitri'];
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        setSimulationResult({
          type: 'string_sort',
          original: names,
          sorted: sortedNames,
          algorithm: 'Bubble Sort on String Array'
        });
        break;
      }

      case 'cds-setc-1': { // Polynomial Multiplication
        setSimulationResult({
          type: 'poly_add',
          p1: '(2x^2 + 3)',
          p2: '(4x^1 + 5)',
          sum: '8x^3 + 10x^2 + 12x^1 + 15'
        });
        break;
      }

      case 'cds-setc-2': { // File Employee sort
        const emps = [
          { empno: 101, empname: 'Rohan' },
          { empno: 102, empname: 'Amit' },
          { empno: 103, empname: 'Pooja' },
          { empno: 104, empname: 'Bhavna' }
        ];
        const sortedEmps = [...emps].sort((a, b) => a.empname.localeCompare(b.empname));
        setSimulationResult({
          type: 'file_sort',
          filename: 'employee.txt',
          records: sortedEmps
        });
        break;
      }

      case 'cds-setc-3': { // File Person age sort
        const persons = [
          { personno: 1, personage: 45 },
          { personno: 2, personage: 19 },
          { personno: 3, personage: 32 },
          { personno: 4, personage: 22 }
        ];
        const sortedPersons = [...persons].sort((a, b) => a.personage - b.personage);
        setSimulationResult({
          type: 'file_sort_age',
          filename: 'person.txt',
          records: sortedPersons
        });
        break;
      }

      case 'cds-setc-4': { // Descending sort all
        const nums = [12, 45, 23, 5, 89];
        const desc = [...nums].sort((a, b) => b - a);
        setSimulationResult({
          type: 'descending_all',
          original: nums,
          descending: desc
        });
        break;
      }

      default:
        setSimulationResult({
          type: 'generic',
          msg: `Executed C simulation for ${problem.title}.`
        });
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span className="font-semibold text-xs text-slate-200">
            {showMarathi ? 'C डेटा स्ट्रक्चर्स लाईव्ह सिम्युलेटर' : 'C Data Structures Interactive Simulator'}
          </span>
        </div>
        <button
          onClick={() => setSimulationResult(null)}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Custom Input Controls based on C problem type */}
        {problem.id.startsWith('cds-seta-') || problem.id === 'cds-setb-2' || problem.id === 'cds-setb-6' ? (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Enter Array Elements (Comma Separated):
              </label>
              <input
                type="text"
                value={arrayInput}
                onChange={(e) => setArrayInput(e.target.value)}
                placeholder="25, 12, 45, 8, 30"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              />
            </div>

            {(problem.id === 'cds-seta-1' || problem.id === 'cds-setb-2') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Search Element (x / Find):
                  </label>
                  <input
                    type="number"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
                {problem.id === 'cds-setb-2' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Replacement Value:
                    </label>
                    <input
                      type="number"
                      value={replaceVal}
                      onChange={(e) => setReplaceVal(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}

        <button
          onClick={handleRunSimulation}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-lg shadow-purple-600/20"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{showMarathi ? 'C सिम्युलेशन चालवा (Run C Algorithm)' : 'Run C Memory & Algorithm Simulation'}</span>
        </button>

        {/* Simulation Output Area */}
        {simulationResult && (
          <div className="mt-4 pt-3 border-t border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Simulation Execution Output
              </span>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs font-mono text-slate-200 leading-relaxed shadow-inner">
              {simulationResult.type === 'frequency' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Sorted Array Memory View:</p>
                  <div className="flex flex-wrap gap-2">
                    {simulationResult.sortedArray.map((val: number, idx: number) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded border text-xs ${
                          val === simulationResult.target
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold'
                            : 'bg-slate-800 border-slate-700 text-slate-300'
                        }`}
                      >
                        arr[{idx}] = {val}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-emerald-400 mt-2">
                    Frequency Output: Element {simulationResult.target} occurs {simulationResult.count} times!
                  </p>
                </div>
              )}

              {simulationResult.type === 'square' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Original Array: [{simulationResult.original.join(', ')}]</p>
                  <p className="text-indigo-400 font-bold">Squared Array:  [{simulationResult.squared.join(', ')}]</p>
                </div>
              )}

              {simulationResult.type === 'copy' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Source Array:      [{simulationResult.source.join(', ')}]</p>
                  <p className="text-purple-400 font-bold">Destination Array: [{simulationResult.destination.join(', ')}]</p>
                </div>
              )}

              {simulationResult.type === 'sort' && (
                <div className="space-y-3">
                  <p className="text-purple-300 font-semibold">{simulationResult.algorithm}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <div>
                      <span className="text-slate-500 text-[11px] block">Unsorted Array</span>
                      <span className="text-slate-300 font-bold">[{simulationResult.original.join(', ')}]</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 text-[11px] block">Sorted Array</span>
                      <span className="text-emerald-300 font-bold">[{simulationResult.sorted.join(', ')}]</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-amber-400">Total Swaps / Shifts: <strong>{simulationResult.swaps}</strong></span>
                    <span className="text-indigo-400">Total Comparisons: <strong>{simulationResult.comparisons}</strong></span>
                  </div>
                </div>
              )}

              {simulationResult.type === 'poly_display' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Polynomial Structure Formatted Output:</p>
                  <p className="text-lg font-bold text-indigo-300">{simulationResult.formatted}</p>
                </div>
              )}

              {simulationResult.type === 'replace' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Original: [{simulationResult.original.join(', ')}]</p>
                  <p className="text-emerald-400 font-bold">
                    Replaced ({simulationResult.searchVal} ➔ {simulationResult.replaceVal}): [{simulationResult.replacedArr.join(', ')}]
                  </p>
                  <p className="text-xs text-slate-500">Replaced {simulationResult.foundCount} occurrence(s).</p>
                </div>
              )}

              {simulationResult.type === 'poly_add' && (
                <div className="space-y-2">
                  <p className="text-slate-400">P1: {simulationResult.p1}</p>
                  <p className="text-slate-400">P2: {simulationResult.p2}</p>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base mt-1">
                    <ArrowRight className="w-4 h-4" />
                    <span>Sum / Product Result: {simulationResult.sum}</span>
                  </div>
                </div>
              )}

              {simulationResult.type === 'string_sort' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Original Strings: [{simulationResult.original.join(', ')}]</p>
                  <p className="text-purple-300 font-bold">Sorted (Alphabetical): [{simulationResult.sorted.join(', ')}]</p>
                </div>
              )}

              {simulationResult.type === 'file_sort' && (
                <div className="space-y-2">
                  <p className="text-slate-400">File Read: {simulationResult.filename}</p>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <p className="text-indigo-300 font-bold underline mb-1">Emp No | Emp Name</p>
                    {simulationResult.records.map((r: any) => (
                      <p key={r.empno}>{r.empno} &nbsp;&nbsp;&nbsp;&nbsp;| {r.empname}</p>
                    ))}
                  </div>
                </div>
              )}

              {simulationResult.type === 'file_sort_age' && (
                <div className="space-y-2">
                  <p className="text-slate-400">File Read: {simulationResult.filename}</p>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <p className="text-purple-300 font-bold underline mb-1">Person No | Age</p>
                    {simulationResult.records.map((r: any) => (
                      <p key={r.personno}>{r.personno} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| {r.personage} yrs</p>
                    ))}
                  </div>
                </div>
              )}

              {simulationResult.type === 'descending_all' && (
                <div className="space-y-2">
                  <p className="text-slate-400">Original: [{simulationResult.original.join(', ')}]</p>
                  <p className="text-fuchsia-400 font-bold">Descending Order (Bubble/Insertion/Selection): [{simulationResult.descending.join(', ')}]</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
