import java.io.*;
import java.text.NumberFormat;
public class Main {
    public static void main(String[] args) throws IOException {

        double s,t,x;
        int i,j;
        String str_x;
        // установка связи с клавиатурой

        BufferedReader br = new BufferedReader (new InputStreamReader(System.in));
        // ограничение для вещественных чисел
        // количества выводимых знаков после запятой (10 цифр)

        NumberFormat nf = NumberFormat.getInstance();
        nf.setMaximumFractionDigits(10);
        System.out.println("Введите х");
        str_x = br.readLine();
        x = Double.parseDouble(str_x);
        // инициализация произведения
        t = 1;

        // цикл произведения
        for (i = 1; i <= 10; i++) {
            s=0; // обнуление суммы
            for (j=10;j>=1;j--) s+=Math.cos(i*j*x); // цикл суммы
            t*=s; //t=t*s
        } // конец for(i)

        // вывод результата
        System.out.println("Результат \n х = "+nf.format(x)+", t = "+nf.format(t));
        // выход из программы
        System.exit(0);
    }
} 