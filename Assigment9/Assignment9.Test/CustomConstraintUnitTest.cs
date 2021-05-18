using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment9.Test
{
    public class CustomConstraintUnitTest
    {
        [Test]
        public void ConvertToUppercaseTestPositive()
        {
            // Act
            string name = "lalit";

            // Assert
            Assert.That("LALIT", Is.ConvertToUppercase(name));
        }

        [Test]
        public void ConvertToUppercaseTestNegative()
        {
            // Act
            string name = "lalit";

            // Assert
            Assert.AreNotEqual("Lalit", Is.ConvertToUppercase(name));
        }
    }
}
