import java.util.Scanner;

public class kkilotomiles {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float km = sc.nextFloat();
        float miles = (float) (km * 0.621371);
        System.out.println(miles);

    }
}
