using aoc_2025.d2;

class Program
{
    static void Main(string[] args)
    {
        if (args.Length == 0)
        {
            Console.WriteLine("Please specify a day to run. Example: dotnet run 1");
            return;
        }

        switch (args[0])
        {
            case "1":
                D1? day1 = new D1();
                day1.Solve1();
                day1.Solve2();
                break;
            case "2":
                D2? day2 = new D2();
                day2.Solve1();
                day2.Solve2();
                break;
            default:
                Console.WriteLine($"Solutioon for day {args[0]} not found.");
                break;
        }
    }
}