package classes;

import Interface.ElementoMultimediale;

public class elements extends ElementoMultimediale implements volume, luminosita {
	
	public String titolo;
	public int durata;
	public int luminosita;
	public int volume;
	
	
	public void AllElement (String _tit, int _dur, int _lum, int _vol) {
		titolo = _tit;
		durata = _dur;
		luminosita = _lum;
		volume = _vol;
		
		
	}
	
	
	public int aumentaLuminosita() {
		
		switch(luminosita) {
		
		case 0:
			luminosita++;
			System.out.printf("*");
		break;
		case 1:
			luminosita++;
			System.out.printf("**");
		break;	
		case 2:
			luminosita++;
			System.out.printf("***");
		break;	
		case 3:
			luminosita++;
			System.out.printf("****");
		break;	
		case 4:
			luminosita++;
			System.out.printf("*****");
		break;
		case 5:
			luminosita++;
			System.out.printf("******");
		break;
		}
		
		return luminosita;
	}

	public int diminuisciLuminosita() {
		
		switch(luminosita) {
		
		case 5:
			luminosita--;
			System.out.printf("*****");
		break;
		case 4:
			luminosita--;
			System.out.printf("****");
		break;	
		case 3:
			luminosita++;
			System.out.printf("***");
		break;	
		case 2:
			luminosita++;
			System.out.printf("**");
		break;	
		case 1:
			luminosita++;
			System.out.printf("*");
		break;
		}
		
		return luminosita;
	}


	public int aumentaVolume() {
		
		switch(volume) {
		
		case 0:
			volume++;
			System.out.printf("!");
		break;
		case 1:
			volume++;
			System.out.printf("!!");
		break;	
		case 2:
			volume++;
			System.out.printf("!!!");
		break;	
		case 3:
			volume++;
			System.out.printf("!!!!");
		break;	
		case 4:
			volume++;
			System.out.printf("!!!!!");
		break;
		case 5:
			volume++;
			System.out.printf("!!!!!!");
		break;
		}
		
		return volume;

	}

	public int diminuisciVolume() {
		
		switch(volume) {
		
		case 5:
			volume--;
			System.out.printf("!!!!!");
		break;
		case 4:
			volume--;
			System.out.printf("!!!!");
		break;	
		case 3:
			volume--;
			System.out.printf("!!!");
		break;	
		case 2:
			volume--;
			System.out.printf("!!");
		break;	
		case 1:
			volume--;
			System.out.printf("!");
		break;
		}
		
		return volume;

	}
	
	
	
	
	public String indiceX() {
	    StringBuilder start = new StringBuilder();
	    for(int i=0;i<luminosita;i++) {
	        start.append("*");
	    }
	    return start.toString();
	}
	public String indiceY() {
	    StringBuilder start = new StringBuilder();
	    for(int i=0;i<volume;i++) {
	        start.append("!");
	    }
	    return start.toString();
	}
	
	public void play() {for (int i=0; i < durata; i++)
	{
     System.out.println(titolo + indiceY() + indiceX());
        }		
	}
    public void show() {
		System.out.print(titolo);
		for(int i = 0; i < luminosita; i++) {
			System.out.print("*");
			}
	}
}
