import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Введите действительное число x: ");
        double x = input.nextDouble();
        System.out.print("Введите действительное число y: ");
        double y = input.nextDouble();

        System.out.println("Сумма действительных чисел: " + (x + y));
        System.out.println("Разность действительных чисел: " + (x - y));
        System.out.println("Произведение действительных чисел: " + (x * y));
    }
}
