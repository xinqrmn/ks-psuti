import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static double a, e, q, s, x;
    static int n=0;
    static String se, sx;
    public static void main(String[] args) throws IOException {


        BufferedReader bReader = new BufferedReader (new InputStreamReader(System.in));
        System.out.println("Введите точность");
        se = bReader.readLine();
        e = Double.parseDouble(se);

        System.out.println("Введите аргумент");
        sx = bReader.readLine();
        x = Double.parseDouble(sx);
        a = x;
        s = a;

        while (Math.abs(a) > e) {
            q = -x * x / (2 * n + 2) / (2 * n + 3);
            a = a * q;
            s = s + a;
            n = n + 1;
        }

        System.out.println("результат \n Сумма s= "+s);
        System.out.println(" Число членов ряда n= "+n);
    }
}