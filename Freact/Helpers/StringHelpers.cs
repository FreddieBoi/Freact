using System;

namespace Freact.Helpers {

    public static class StringHelpers {

        public static bool StartsWith(string string1, string string2, bool caseSensitive = false) {
            var s1 = string1?.Trim();
            var s2 = string2?.Trim();
            if (!caseSensitive) {
                s1 = string1?.ToLower();
                s2 = string2?.ToLower();
            }
            return !string.IsNullOrWhiteSpace(s1) && s1.StartsWith(s2);
        }

        public static bool Contains(string string1, string string2, bool caseSensitive = false) {
            var s1 = string1?.Trim();
            var s2 = string2?.Trim();
            if (!caseSensitive) {
                s1 = string1?.ToLower();
                s2 = string2?.ToLower();
            }
            return !string.IsNullOrWhiteSpace(s1) && s1.Contains(s2);
        }

        /// <summary>
        /// Compute the distance between two strings.
        /// </summary>
        public static int LevenshteinDistance(string string1, string string2, bool caseSensitive = false) {
            var s1 = string1;
            var s2 = string2;
            if (!caseSensitive) {
                s1 = string1.ToLower();
                s2 = string2.ToLower();
            }
            var n = s1.Length;
            var m = s2.Length;
            var d = new int[n + 1, m + 1];

            // Step 1
            if (n == 0) {
                return m;
            }

            if (m == 0) {
                return n;
            }

            // Step 2
            for (int i = 0; i <= n; d[i, 0] = i++) {
            }

            for (int j = 0; j <= m; d[0, j] = j++) {

            }

            // Step 3
            for (int i = 1; i <= n; i++) {
                // Step 4
                for (int j = 1; j <= m; j++) {
                    // Step 5
                    int cost = s2[j - 1] == s1[i - 1] ? 0 : 1;

                    // Step 6
                    d[i, j] = Math.Min(
                        Math.Min(d[i - 1, j] + 1, d[i, j - 1] + 1),
                        d[i - 1, j - 1] + cost);
                }
            }
            // Step 7
            return d[n, m];
        }

    }

}
