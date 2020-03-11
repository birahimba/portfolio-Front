export class Experience{
  id: number;
  contratType: ContratType;
  entreprise: string;
  entrepiseLink: string;
  lieu: string;
  dateDebut: Date;
  dateFin: Date;
  media: string;
}

enum ContratType{
  CDI = 'CDI',
  CDD = 'CDD',
  STAGE = 'STAGE'  
}