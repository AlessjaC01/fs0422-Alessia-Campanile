package class_;

public class Libri {

	public int annoPubblicazione;
	public int numPagine;
	public int codiceISBN;
	public String titolo;
	public String autore;
	public String genere;
	public Periodicità periodicita;
	
	
	public int getCodiceISBN(){
		return codiceISBN;
		}
	
	public int getAnnoPubblicazione() {
		return annoPubblicazione;
	}
	
	public String getAutore() {
		return autore;
	}
	
	@Override
	public String toString() {
		 return codiceISBN + " " + titolo + " " +
				annoPubblicazione + " " + numPagine + " " +
				autore +" " + genere;}

}
