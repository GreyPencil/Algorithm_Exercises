package medium;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Three_number_sum {
    public static List<Integer[]> threenumberSum(int[] array, int targetSum){
        Arrays.sort(array);
        List<Integer[]> triplets = new ArrayList<Integer[]>();
        for (int i = 0; i< array.length - 2; i++){
            int left = i+1;
        int right = array.length-1;
        while (left < right){
            int currentSum = array[i]+array[left]+array[right];
            if (currentSum < targetSum){
                left ++;
            }else if (currentSum > targetSum){
                right --;
            }else if (currentSum == targetSum) {
                Integer[] newTriplet = {array[i],array[left],array[right]};
                triplets.add(newTriplet);
                left ++;
                right --;
            }
        } 
        }
        return triplets;
    }
}
