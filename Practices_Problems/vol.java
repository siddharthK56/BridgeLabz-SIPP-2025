
import java.util.Scanner;

public class vol {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float h = sc.nextFloat();
        float r = sc.nextFloat();
        float vol = (float)3.14*r*r*h;
        System.out.println(vol);
    }
}