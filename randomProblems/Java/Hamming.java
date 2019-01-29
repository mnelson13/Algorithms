/*
Problem:
Calculate the Hamming Distance between two DNA strands.

When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".

Problem Source: Exercism.io
*/

class Hamming {

    String leftStrand;
    String rightStrand;

    public Hamming(String leftStrand, String rightStrand) {
        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
    }

    public int getHammindDistance() {
        int distance = 0;

        if (leftStrand.length() != rightStrand.length()){
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        } else {
            for (int i = 0; i < leftStrand.length(); i++){
                if (leftStrand.charAt(i) != rightStrand.charAt(i)){
                    distance++;
                }
            }
            System.out.println(distance);
            return distance;
        }
    }

    public static void main(String args[]) {
        new Hamming("GGACTGA", "GGACTGA").getHammindDistance(); //Should return 0
        new Hamming("AT", "CT").getHammindDistance(); //Should return 1
        new Hamming("ACCAGGG", "ACTATGG").getHammindDistance(); //Should return 2
        new Hamming("GGACGGATTCTG", "AGGACGGATTCT").getHammindDistance(); //Should return 9
    }
}