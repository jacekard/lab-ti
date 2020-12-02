using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1
{
    public class ExampleUsers
    {
        public static readonly Dictionary<string, User> Users = new Dictionary<string, User>
        {
            { "jdawidj", new User { Id = 1, Login = "jdawidj", Password = "123" } },
            { "jardanow", new User { Id = 2, Login = "jardanow", Password = "321" } },
            { "kkrzysio", new User { Id = 3, Login = "kkrzysio", Password = "misio" } },
        };
    }
}
