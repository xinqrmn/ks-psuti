import java.io.*;
import java.text.NumberFormat;

public class Main {
    public static void main(String[] args) throws IOException {
        double x,t;
        int i;
        String str_x;
        // установка связи с клавиатурой

        BufferedReader br= new BufferedReader (new InputStreamReader(System.in));
        // ограничение для вещественных чисел

        // количества выводимых знаков после запятой (5 цифр)
        NumberFormat nf = NumberFormat.getInstance();
        nf.setMaximumFractionDigits(5);
        System.out.println("Введите х");
        str_x = br.readLine();
        x=Double.parseDouble(str_x);

        // обнуление суммы
        t=0;

        // вычисление суммы (z=z+sqr(x)/i)
        for (i=1;i<=20;i++) t+=Math.pow(x, 2)/i;
        System.out.println("Результат х = "+nf.format(x)+", t = "+nf.format(t));
        // вывод результата

        System.exit(0);
    }
}
