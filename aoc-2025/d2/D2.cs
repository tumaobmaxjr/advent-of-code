using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Text;

namespace aoc_2025.d2
{
    internal class D2
    {
        private readonly string[] _input;

        public D2()
        {
            _input = File.ReadAllLines(@"d2\input.txt");
        }

        public void Solve1()
        {
            List<string> input = new List<string>();
            foreach (string line in _input)
            {
                string[] parts = line.Split(',', StringSplitOptions.RemoveEmptyEntries);
                input.AddRange(parts);
            }

            ulong totalInvalid = 0;
            ulong maxNumber = ulong.MinValue;

            foreach (var range in input)
            {
                string[] bounds = range.Split('-', StringSplitOptions.RemoveEmptyEntries);
                ulong start = ulong.Parse(bounds[0]);
                ulong end = ulong.Parse(bounds[1]);

                if (start > maxNumber)
                {
                    maxNumber = start;
                }
                if (end > maxNumber)
                {
                    maxNumber = end;
                }

                for (ulong i = start; i <= end; i++)
                {
                    string s = i.ToString();

                    if (s.Length % 2 == 0)
                    {
                        int half = s.Length / 2;
                        string firstHalf = s.Substring(0, half);
                        string secondHalf = s.Substring(half, half);

                        if (firstHalf == secondHalf)
                        {
                            ulong invalid = i;
                            totalInvalid += invalid;
                            //Console.WriteLine($"Found invalid ID number: {invalid}");
                        }
                    }
                }
            }

            //Console.WriteLine($"Maximum ID number found: {maxNumber}");
            Console.WriteLine($"Total invalid IDs sum: {totalInvalid}");
        }

        public void Solve2()
        {
            List<string> input = new List<string>();
            foreach (string line in _input)
            {
                string[] parts = line.Split(',', StringSplitOptions.RemoveEmptyEntries);
                input.AddRange(parts);
            }

            ulong totalInvalid = 0;

            foreach (var range in input)
            {
                string[] bounds = range.Split('-', StringSplitOptions.RemoveEmptyEntries);
                ulong start = ulong.Parse(bounds[0]);
                ulong end = ulong.Parse(bounds[1]);

                for (ulong i = start; i <= end; i++)
                {
                    string s = i.ToString();
                    int len = s.Length;

                    for (int split = 1; split <= len / 2; split++)
                    {
                        if (len % split != 0)
                        {
                            continue;
                        }

                        string seq = s.Substring(0, split);

                        string rep = "";
                        int repeatCount = len / split;
                        for (int r = 0; r < repeatCount; r++)
                        {
                            rep += seq;
                        }

                        if (rep == s)
                        {
                            //Console.WriteLine($"Found invalid ID number: {s}");
                            totalInvalid += i;
                            break;
                        }
                    }
                }
            }

            Console.WriteLine($"Total invalid IDs sum: {totalInvalid}");
        }
    }
}
