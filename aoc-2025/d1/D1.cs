public class D1
{
    private readonly string[] _lines;

    public D1()
    {
        _lines = File.ReadAllLines(@"d1\input.txt");
    }

    public void Solve1()
    {
        int currentPosition = 50;
        Console.WriteLine($"The dial starts by pointing at {currentPosition}");

        int count = 0;
        for (int i = 0; i < _lines.Length; i++)
        {
            string line = _lines[i];
            int val = int.Parse(line.Substring(1)); // remove L/R

            int rotationVal = line.StartsWith("L") ? -val : val;

            int temp = currentPosition + rotationVal;
            // Console.WriteLine($"{line} {currentPosition} + {rotationVal} = {temp}");

            currentPosition = temp % 100;
            if (currentPosition < 0)
            {
                currentPosition += 100;
                // Console.WriteLine($"\t({temp} mod 100) + 100 = {currentPosition}");
            }
            else
            {
                // Console.WriteLine($"\t{temp} mod 100 = {currentPosition}");
            }

            if (currentPosition == 0)
            {
                count++;
            }
        }
        Console.WriteLine($"Answer: {count}\n");

    }

    public void Solve2()
    {
        int currentPosition = 50;
        Console.WriteLine($"The dial starts by pointing at {currentPosition}");

        int count = 0;
        for (int i = 0; i < _lines.Length; i++)
        {
            string line = _lines[i];
            int val = int.Parse(line.Substring(1)); // remove L/R

            int rotationVal = line.StartsWith("L") ? -val : val;

            int start = currentPosition;
            // int temp = start + rotationVal;
            // Console.WriteLine($"{line} {start} + {rotationVal} = {temp}");

            int fullRevs = Math.Abs(rotationVal) / 100;
            count += fullRevs;

            int leftover = rotationVal % 100;

            int end = (start + leftover) % 100;
            if (end < 0) end += 100;

            if (leftover > 0 && start + leftover >= 100)
                count++;
            else if (leftover < 0 && (start + leftover) <= 0 && start != 0)
                count++;

            currentPosition = end;
        }

        Console.WriteLine($"Answer: {count}\n");
    }
}