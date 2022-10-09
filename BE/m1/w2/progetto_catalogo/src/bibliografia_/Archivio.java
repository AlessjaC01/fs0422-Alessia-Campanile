package bibliografia_;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import class_.Libri;
import class_.Libro;

public class Archivio {

	public static void main(String[] args) {
		List<Libri> Lista = new ArrayList<>();
		int select;
		int ISBN;
		boolean disp = false;
		Scanner number = new Scanner(System.in);
		Scanner string = new Scanner(System.in);
		do {
				System.out.println("1: Aggiungere elemento");
				System.out.println("2: Rimuovere un elemento");
				System.out.println("3: Controlla la lista dei libri o riviste");
				System.out.println("4: Cerca per ISBN, anno pubblicazione e numero pagine");
				select = number.nextInt();
				
				switch(select) {
					
				case 1:
					System.out.println("Codice ISBN: ");
					int cod = number.nextInt();
					System.out.println("Titolo: ");
					String tit = string.nextLine();
			        System.out.println("Anno pubblicazione: ");
					int anno = number.nextInt();
					System.out.println("Numero pagine: ");
					int pag = number.nextInt();
			        System.out.println("Autore: ");
					String aut = string.nextLine();
					System.out.println("Genere: ");
					String gen = string.nextLine();
					Lista.add(new Libro(cod, tit, anno, pag, aut, gen ));
					break;
					
				case 2:
					ISBN = number.nextInt();
					Iterator<Libri> iteratorLista = Lista.iterator();
					while(iteratorLista.hasNext()) {
						Libri a = iteratorLista.next();
						if (a.getCodiceISBN() == ISBN);
						iteratorLista.remove();
						disp = true;
						System.out.println("il libro e' stato rimosso!");
					}
					if (!disp) {
						System.out.println("Non c'e'...");
					}
					break;
			    case 3:
					Iterator<Libri> iteratorLista2 = Lista.iterator();
					while(iteratorLista2.hasNext()) {
						Libri a = iteratorLista2.next();
						System.out.println(a);
					}
				case 4:				
					cod = number.nextInt();
					aut = string.nextLine();
					anno = number.nextInt();
					Stream<Libri> str = Lista.stream();
					List<Libri> li = Lista.stream().filter(c -> c.getCodiceISBN() == cod).collect(Collectors.toList());
					List<Libri> li2 = Lista.stream().filter(c -> c.getAnnoPubblicazione() == anno).collect(Collectors.toList());
					List<Libri> li3 = Lista.stream().filter(c -> c.getAutore() == aut).collect(Collectors.toList());
					disp = false;
				    System.out.println(li, li2, li3);
					break;
				}
			
		}
		while(select != 0);

	}

}
