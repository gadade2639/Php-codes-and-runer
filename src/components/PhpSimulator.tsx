import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Monitor, Code } from 'lucide-react';
import { Problem } from '../types';

interface PhpSimulatorProps {
  problem: Problem;
}

export const PhpSimulator: React.FC<PhpSimulatorProps> = ({ problem }) => {
  const initialFormValues = () => {
    const vals: Record<string, any> = {};
    problem.inputFields?.forEach((field) => {
      vals[field.name] = field.defaultValue ?? '';
    });
    return vals;
  };

  const [formState, setFormState] = useState<Record<string, any>>(initialFormValues());
  const [outputHtml, setOutputHtml] = useState<string | null>(null);

  useEffect(() => {
    setFormState(initialFormValues());
    setOutputHtml(null);
  }, [problem.id]);

  const handleInputChange = (name: string, value: any) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormState(initialFormValues());
    setOutputHtml(null);
  };

  // Run PHP Logic in TypeScript simulator
  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    let result = '';

    switch (problem.id) {
      case 'php-seta-1': {
        const num1 = parseInt(formState.num1, 10);
        const num2 = parseInt(formState.num2, 10);
        if (num2 === 0) {
          result = `<h3 style="color:#ef4444; font-weight: bold;">Error: Division by zero is not allowed (0 ने भाग देता येत नाही)!</h3>`;
        } else {
          const quotient = Math.floor(num1 / num2);
          const remainder = num1 % num2;
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <h3 style="font-size: 16px; font-weight: bold; color: #10b981; margin-bottom: 8px;">--- Result ---</h3>
              <p style="margin-bottom: 4px;">Quotient = <strong>${quotient}</strong></p>
              <p>Remainder = <strong>${remainder}</strong></p>
            </div>
          `;
        }
        break;
      }

      case 'php-seta-2': {
        const a = formState.a;
        const b = formState.b;
        let temp = a;
        let swappedA = b;
        let swappedB = temp;
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h4 style="font-weight: bold; color: #cbd5e1; margin-bottom: 4px;">Before Swapping:</h4>
            <p style="margin-bottom: 12px; color: #f8fafc;">A = ${a}, B = ${b}</p>
            <h4 style="font-weight: bold; color: #34d399; margin-bottom: 4px;">After Swapping:</h4>
            <p style="color: #34d399; font-weight: bold;">A = ${swappedA}, B = ${swappedB}</p>
          </div>
        `;
        break;
      }

      case 'php-seta-3': {
        const c = parseFloat(formState.celsius);
        const f = (c * 9) / 5 + 32;
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: #38bdf8; margin-bottom: 8px;">--- Result ---</h3>
            <p style="font-size: 18px; font-weight: 600;">${c} °C = <span style="color: #f43f5e;">${f.toFixed(2)} °F</span></p>
          </div>
        `;
        break;
      }

      case 'php-seta-4': {
        const year = parseInt(formState.year, 10);
        const isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: ${isLeap ? '#10b981' : '#f43f5e'};">
              ${year} is ${isLeap ? 'a LEAP YEAR 🎉' : 'NOT a Leap Year ❌'}
            </h3>
          </div>
        `;
        break;
      }

      case 'php-seta-5': {
        const num1 = parseFloat(formState.num1);
        const num2 = parseFloat(formState.num2);
        const op = formState.op;
        let res = 0;
        let err = false;

        if (op === '+') res = num1 + num2;
        else if (op === '-') res = num1 - num2;
        else if (op === '*') res = num1 * num2;
        else if (op === '/') {
          if (num2 === 0) err = true;
          else res = num1 / num2;
        }

        if (err) {
          result = `<h3 style="color:#ef4444; font-weight: bold;">Cannot divide by zero!</h3>`;
        } else {
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <h3 style="font-size: 16px; font-weight: bold; color: #818cf8;">Result: ${num1} ${op} ${num2} = <span style="color: #38bdf8;">${res}</span></h3>
            </div>
          `;
        }
        break;
      }

      case 'php-seta-6': {
        const per = parseFloat(formState.per);
        let grade = '';
        if (per < 40) grade = 'Fail ❌';
        else if (per >= 40 && per <= 50) grade = 'Pass Class';
        else if (per > 50 && per <= 60) grade = 'Higher Second Class';
        else if (per > 60 && per <= 70) grade = 'First Class';
        else grade = 'First Class with Distinction 🌟';

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: #c084fc; margin-bottom: 6px;">--- Result ---</h3>
            <p style="margin-bottom: 4px;">Percentage: <strong>${per} %</strong></p>
            <p style="font-size: 16px;">Grade: <strong>${grade}</strong></p>
          </div>
        `;
        break;
      }

      case 'php-setb-1': {
        const l = parseFloat(formState.l);
        const b = parseFloat(formState.b);
        const h = parseFloat(formState.h);
        const surfaceArea = 2 * (l * b + l * h + b * h);
        const volume = l * b * h;
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: #38bdf8; margin-bottom: 6px;">--- Result ---</h3>
            <p style="margin-bottom: 4px;">Surface Area = <strong>${surfaceArea.toFixed(2)} sq. units</strong></p>
            <p>Volume = <strong>${volume.toFixed(2)} cubic units</strong></p>
          </div>
        `;
        break;
      }

      case 'php-setb-2': {
        const r = parseFloat(formState.r);
        const s = parseFloat(formState.s);
        const l = parseFloat(formState.l);
        const w = parseFloat(formState.w);

        const circle = Math.PI * r * r;
        const square = s * s;
        const rect = l * w;

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: #10b981; margin-bottom: 8px;">--- Areas ---</h3>
            <p style="margin-bottom: 4px;">Area of Circle (r=${r}): <strong>${circle.toFixed(2)} sq. units</strong></p>
            <p style="margin-bottom: 4px;">Area of Square (s=${s}): <strong>${square.toFixed(2)} sq. units</strong></p>
            <p>Area of Rectangle (l=${l}, w=${w}): <strong>${rect.toFixed(2)} sq. units</strong></p>
          </div>
        `;
        break;
      }

      case 'php-setb-3': {
        const ds = parseFloat(formState.ds) || 0;
        const dm = parseFloat(formState.dm) || 0;
        const php = parseFloat(formState.php) || 0;
        const se = parseFloat(formState.se) || 0;
        const bigdata = parseFloat(formState.bigdata) || 0;

        const total = ds + dm + php + se + bigdata;
        const percentage = (total / 500) * 100;

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; color: #f59e0b; margin-bottom: 8px;">--- Marksheet Result ---</h3>
            <p style="margin-bottom: 2px;">Data Structure: ${ds} / 100</p>
            <p style="margin-bottom: 2px;">Digital Marketing: ${dm} / 100</p>
            <p style="margin-bottom: 2px;">PHP: ${php} / 100</p>
            <p style="margin-bottom: 2px;">SE: ${se} / 100</p>
            <p style="margin-bottom: 8px;">Bigdata: ${bigdata} / 100</p>
            <hr style="border-color: #334155; margin: 8px 0;" />
            <p style="font-size: 15px;"><b>Total Marks:</b> ${total} / 500</p>
            <p style="font-size: 16px; color: #10b981;"><b>Percentage:</b> ${percentage.toFixed(2)} %</p>
          </div>
        `;
        break;
      }

      case 'php-setb-4': {
        const primes: number[] = [];
        for (let i = 2; i <= 50; i++) {
          let isP = true;
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) { isP = false; break; }
          }
          if (isP) primes.push(i);
        }
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 15px; font-weight: bold; color: #818cf8; margin-bottom: 8px;">Prime Numbers Between 1 to 50:</h3>
            <p style="font-size: 16px; letter-spacing: 1px; color: #38bdf8;">${primes.join(' ')}</p>
          </div>
        `;
        break;
      }

      case 'php-setb-5': {
        const perfects: number[] = [];
        for (let num = 1; num <= 100; num++) {
          let sum = 0;
          for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) sum += i;
          }
          if (sum === num && num !== 0) perfects.push(num);
        }
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 15px; font-weight: bold; color: #a7f3d0; margin-bottom: 8px;">Perfect Numbers Between 1 to 100:</h3>
            ${perfects.map((p) => `<p><b>${p}</b> is a Perfect Number (Divisors sum = ${p}).</p>`).join('')}
          </div>
        `;
        break;
      }

      case 'php-setb-6': {
        const num = parseInt(formState.num, 10);
        let temp = Math.abs(num);
        let rev = 0;
        while (temp > 0) {
          const rem = temp % 10;
          rev = rev * 10 + rem;
          temp = Math.floor(temp / 10);
        }
        if (num < 0) rev = -rev;
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <p style="margin-bottom: 4px;">Original Number: <strong>${num}</strong></p>
            <p style="font-size: 18px; color: #f43f5e; font-weight: bold;">Reversed Number: ${rev}</p>
          </div>
        `;
        break;
      }

      case 'php-setb-7': {
        const armstrongs: number[] = [];
        for (let i = 1; i <= 500; i++) {
          let temp = i;
          let sum = 0;
          while (temp > 0) {
            const rem = temp % 10;
            sum += rem * rem * rem;
            temp = Math.floor(temp / 10);
          }
          if (sum === i) armstrongs.push(i);
        }
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 15px; font-weight: bold; color: #fbbf24; margin-bottom: 8px;">Armstrong Numbers Between 1 to 500:</h3>
            <p style="font-size: 16px; font-weight: bold; color: #fef08a;">${armstrongs.join(', ')}</p>
          </div>
        `;
        break;
      }

      case 'php-setb-8': {
        const arr1 = [10, 20, 30, 40];
        const arr2 = [30, 40, 50, 60];
        const union = Array.from(new Set([...arr1, ...arr2]));
        const shuffled = [...arr1].sort(() => Math.random() - 0.5);
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <p><b>Array 1:</b> [${arr1.join(', ')}]</p>
            <p><b>Array 2:</b> [${arr2.join(', ')}]</p>
            <h4 style="color: #38bdf8; font-weight: bold; margin-top: 8px;">a) Union of Arrays:</h4>
            <p style="color: #a7f3d0; font-weight: bold;">[${union.join(', ')}]</p>
            <h4 style="color: #c084fc; font-weight: bold; margin-top: 8px;">b) Random Order Traversal:</h4>
            <p style="color: #fef08a;">${shuffled.join(' ')}</p>
          </div>
        `;
        break;
      }

      case 'php-setb-9': {
        const student: Record<string, any> = {
          roll_no: 101,
          name: 'Rahul',
          course: 'BCA',
          city: 'Pune'
        };
        const entries = Object.entries(student);
        const size = entries.length;

        // delete city
        const deleted = { ...student };
        delete deleted.city;

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h4 style="color: #38bdf8; font-weight: bold;">a) Key-Value Pairs:</h4>
            ${entries.map(([k, v]) => `<p>${k} : ${v}</p>`).join('')}
            <h4 style="color: #10b981; font-weight: bold; margin-top: 8px;">b) Array Size:</h4>
            <p>Total Elements = ${size}</p>
            <h4 style="color: #f43f5e; font-weight: bold; margin-top: 8px;">c) After Unset 'city':</h4>
            <pre style="background: #0f172a; padding: 6px; border-radius: 4px;">${JSON.stringify(deleted, null, 2)}</pre>
          </div>
        `;
        break;
      }

      case 'php-setc-1': {
        const name = formState.name || 'John Doe';
        const gender = formState.gender || 'Male';
        const contact = formState.contact || '+91 9876543210';
        const address = formState.address || '123 Main St';
        const source = formState.source || 'Mumbai';
        const destination = formState.destination || 'Delhi';
        const doj = formState.doj || '2026-10-15';
        const persons = parseInt(formState.persons, 10) || 1;
        const price = parseFloat(formState.price) || 0;

        const totalCost = persons * price;

        result = `
          <div style="border-top: 2px solid #334155; margin-top: 12px; padding-top: 12px; background: #020617; padding: 12px; border-radius: 8px;">
            <h2 style="font-size: 16px; font-weight: bold; color: #38bdf8; margin-bottom: 8px;">--- AIR TICKET RESERVATION DETAILS ---</h2>
            <p><b>Passenger Name:</b> ${name}</p>
            <p><b>Gender:</b> ${gender}</p>
            <p><b>Contact No:</b> ${contact}</p>
            <p><b>Address:</b> ${address}</p>
            <hr style="border-color: #334155; margin: 8px 0;" />
            <p><b>Route:</b> ${source} ✈️ ${destination}</p>
            <p><b>Date of Journey:</b> ${doj}</p>
            <p><b>Number of Passengers:</b> ${persons}</p>
            <p><b>Price Per Ticket:</b> ₹${price.toLocaleString('en-IN')}</p>
            <hr style="border-color: #334155; margin: 8px 0;" />
            <h3 style="font-size: 18px; font-weight: bold; color: #10b981;">Total Amount: ₹${totalCost.toLocaleString('en-IN')}</h3>
          </div>
        `;
        break;
      }

      case 'php-setc-2': {
        const numStr = String(formState.num || '');
        const wordMap: Record<string, string> = {
          '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
          '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
        };
        const words = numStr.split('').map((char) => wordMap[char] || char).join(' ');
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="font-size: 18px; font-weight: bold; color: #a7f3d0;">Output Words:</h3>
            <p style="font-size: 20px; font-weight: 600; color: #38bdf8; letter-spacing: 1px;">${words}</p>
          </div>
        `;
        break;
      }

      case 'php-setc-3': {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[new Date().getDay()];
        const bgMap: Record<string, string> = {
          Monday: '#fca5a5',
          Tuesday: '#fef08a',
          Wednesday: '#86efac',
          Thursday: '#7dd3fc',
          Friday: '#c084fc',
          Saturday: '#fdba74',
          Sunday: '#cbd5e1'
        };
        const color = bgMap[dayName] || '#ffffff';
        result = `
          <div style="padding: 16px; border-radius: 8px; color: #020617; background-color: ${color}; font-weight: bold;">
            <h3 style="font-size: 18px;">Today is: ${dayName}</h3>
            <p style="font-[13px]; font-weight: normal; margin-top: 4px;">Background color is dynamically updated for ${dayName}.</p>
          </div>
        `;
        break;
      }

      case 'php-setc-4': {
        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h3 style="color: #38bdf8; margin-bottom: 6px;">Total Even Numbers between 1 to 1000: <b>500</b></h3>
            <h3 style="color: #f43f5e;">Total Odd Numbers between 1 to 1000: <b>500</b></h3>
          </div>
        `;
        break;
      }

      case 'php-setc-5': {
        const str1 = 'Hello World';
        const str2 = 'Apple';
        const str3 = 'Banana';
        const cmp = str2.localeCompare(str3);
        let cmpText = '';
        if (cmp === 0) cmpText = 'Both strings are equal.';
        else if (cmp < 0) cmpText = `'${str2}' is smaller than '${str3}'`;
        else cmpText = `'${str2}' is greater than '${str3}'`;

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <p><b>i) String Compare:</b> ${cmpText}</p>
            <p style="margin-top: 6px;"><b>ii) Uppercase:</b> ${str1.toUpperCase()}, ${str2.toUpperCase()}, ${str3.toUpperCase()}</p>
            <p style="margin-top: 6px;"><b>iii) Lowercase:</b> ${str1.toLowerCase()}, ${str2.toLowerCase()}, ${str3.toLowerCase()}</p>
          </div>
        `;
        break;
      }

      case 'php-setc-6': {
        const str1 = 'php is a popular scripting language. php is easy.';
        const str2 = 'php';
        const titleCase = str1.replace(/\b\w/g, (c) => c.toUpperCase());
        const firstPos = str1.indexOf(str2);
        const lastPos = str1.lastIndexOf(str2);

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <h4 style="color: #38bdf8; font-weight: bold;">i) Word Conversions:</h4>
            <p>Title Case: <b>${titleCase}</b></p>
            <p>Uppercase: <b>${str1.toUpperCase()}</b></p>
            <p>Lowercase: <b>${str1.toLowerCase()}</b></p>
            <h4 style="color: #10b981; font-weight: bold; margin-top: 8px;">ii) Occurrences of '${str2}':</h4>
            <p>First Occurrence Index: <b>${firstPos}</b></p>
            <p>Last Occurrence Index: <b>${lastPos}</b></p>
          </div>
        `;
        break;
      }

      case 'php-setc-7': {
        const ch = formState.choice || '1';
        const arr1: Record<string, number> = { a: 30, b: 10, c: 50, d: 20 };
        const arr2: Record<string, number> = { c: 50, d: 20, e: 70 };

        if (ch === '1') {
          const valsAsc = Object.values(arr1).sort((x, y) => x - y);
          const valsDesc = [...valsAsc].reverse();
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <p style="color: #10b981; font-weight: bold;">Ascending (Keys Re-indexed):</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(valsAsc)}</pre>
              <p style="color: #f43f5e; font-weight: bold; margin-top:6px;">Descending (Keys Re-indexed):</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(valsDesc)}</pre>
            </div>
          `;
        } else if (ch === '2') {
          const entriesAsc = Object.entries(arr1).sort((a, b) => a[1] - b[1]);
          const entriesDesc = Object.entries(arr1).sort((a, b) => b[1] - a[1]);
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <p style="color: #10b981; font-weight: bold;">Ascending (Keys Preserved - asort):</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(Object.fromEntries(entriesAsc))}</pre>
              <p style="color: #f43f5e; font-weight: bold; margin-top:6px;">Descending (Keys Preserved - arsort):</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(Object.fromEntries(entriesDesc))}</pre>
            </div>
          `;
        } else if (ch === '3') {
          const intersect: Record<string, number> = {};
          for (const k in arr1) {
            if (k in arr2 && arr1[k] === arr2[k]) intersect[k] = arr1[k];
          }
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <p style="color: #38bdf8; font-weight: bold;">Intersection of Array 1 and Array 2:</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(intersect, null, 2)}</pre>
            </div>
          `;
        } else {
          const union = { ...arr2, ...arr1 };
          result = `
            <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
              <p style="color: #c084fc; font-weight: bold;">Union of Array 1 and Array 2:</p>
              <pre style="background:#020617; padding:6px;">${JSON.stringify(union, null, 2)}</pre>
            </div>
          `;
        }
        break;
      }

      case 'php-setc-8': {
        const str1 = 'Welcome to Java programming. Java is powerful.';
        const str2 = 'Java';
        const str3 = 'PHP';

        const replaced = str1.replaceAll(str2, str3);
        const reversed = str1.split('').reverse().join('');

        result = `
          <div style="border-top: 1px solid #334155; margin-top: 10px; padding-top: 10px;">
            <p><b>Original String:</b> ${str1}</p>
            <h4 style="color: #10b981; font-weight: bold; margin-top: 8px;">i) After Replace ('Java' ➔ 'PHP'):</h4>
            <p style="color: #38bdf8; font-weight: bold;">${replaced}</p>
            <h4 style="color: #f43f5e; font-weight: bold; margin-top: 8px;">ii) Reversed String:</h4>
            <p style="font-family: monospace;">${reversed}</p>
          </div>
        `;
        break;
      }

      default:
        result = `<p>Executed logic for ${problem.title}.</p>`;
    }

    setOutputHtml(result);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-xs text-slate-200">
            Live Interactive PHP Form Simulator
          </span>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-4 space-y-4">
        {problem.inputFields && problem.inputFields.length > 0 ? (
          <form onSubmit={handleSimulate} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problem.inputFields.map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-xs font-medium text-slate-300">
                    {field.label}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      value={formState[field.name] ?? field.defaultValue ?? ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      value={formState[field.name] ?? field.defaultValue ?? ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 h-16"
                    />
                  ) : (
                    <input
                      type={field.type}
                      step={field.step}
                      min={field.min}
                      max={field.max}
                      value={formState[field.name] ?? field.defaultValue ?? ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-lg shadow-emerald-600/20"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Run PHP Form Script</span>
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">
              This PHP script executes automatically without requiring form input.
            </p>
            <button
              onClick={handleSimulate}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-lg shadow-emerald-600/20"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Execute Script & View Output</span>
            </button>
          </div>
        )}

        {/* Live PHP Simulated Output View */}
        {outputHtml !== null && (
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Simulated PHP HTML Output
              </span>
            </div>

            <div
              className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs text-slate-200 font-sans leading-relaxed shadow-inner"
              dangerouslySetInnerHTML={{ __html: outputHtml }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
