import java.util.Scanner;
public class Main {

    static void sqrt(long a) {
        double b = a;
        int i = 0;
        while ((b * b > a) && (i < 200)) {
            b = (b + a / b) / 2;
            i++;
        }
        System.out.println(b);
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Введите число x: ");
        long x = input.nextLong();

        sqrt(x);
    }
}