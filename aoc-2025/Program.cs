// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

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
                day1.Solve();
                break;
            default:
                Console.WriteLine($"Solutioon for day {args[0]} not found.");
                break;
        }
    }
}