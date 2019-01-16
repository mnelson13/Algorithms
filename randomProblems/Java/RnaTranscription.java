/*
Problem:
Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U

Problem Source: Exercism.io
*/

class RnaTranscription {

    public static void main(String args[]) {
        transcribe("");
        transcribe ("G");
        transcribe ("C");
        transcribe ("T");
        transcribe ("A");
        transcribe ("ACGTGGTCTTAA");
        transcribe ("B");
    }

    public static String transcribe(String dnaStrand) {
        String rna = "";

        if (dnaStrand == ""){
            rna = "Empty String";
        } else {
            for (int i = 0; i < dnaStrand.length(); i++) {
                switch (dnaStrand.charAt(i)) {
                    case 'G': rna += "C";
                        break;
                    case 'C': rna += "G";
                        break;
                    case 'T': rna += "A";
                        break;
                    case 'A': rna += "U";
                        break;
                    default:
                        rna = "Invalid DNA Strand";
                }
            }
        }

        System.out.println(rna);
        return rna;
    }

}