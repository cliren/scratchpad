package my.example.problems;

public class ReverseNumber {
    public static void main(String a[]) {
        long n = 10289898989l;
        long reverse = 0;

        while (n != 0) {
            reverse = reverse * 10;
            reverse = reverse + n % 10;
            n = n / 10;
        }

        System.out.println(reverse);

    }
}
