import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        int NN=30;
        int i, xmax, imax, N;
        int[] x=new int[NN]; String strNN;

        // связь с клавиатурой
        BufferedReader bReader = new BufferedReader (new InputStreamReader(System.in));

        System.out.println("Введите размер массива");
        strNN = bReader.readLine();
        N=Integer.parseInt(strNN);

        System.out.println("размер массива = " + strNN);

        for (i=0;i<N;i++) {
            x[i]=(int)(Math.random()*100);
        }

        xmax=x[0]; imax=0;

        for (i=1;i<x.length;i++) {
            if (x[i] > xmax) {
                xmax=x[i];
                imax=i;
            }
        }

        System.out.println("Результат");
        for (i=0;i<N;i++) {
            System.out.print("x["+(i+1)+"]= "+x[i]+"; ");
        }

        System.out.println("\nРезультат");
        System.out.println("xmax= "+xmax+" imax= "+(imax+1));
    }
}
