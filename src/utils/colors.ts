export class Colors {
    private colorPrimary: string = 'FFFFFF';
    private colorSecondary: string = 'FFFFFF';
    private colorTertiary: string = 'FFFFFF';
  
    private isInitialized: boolean = false; // Flag pour vérifier si les couleurs ont été chargées
  
    constructor(private scenarioId: number) {
      this.initColors();
    }

    /**
     * Getter pour la couleur primaire
     */
    get primary(): string {
      if (!this.isInitialized) {
        console.warn("Les couleurs n'ont pas était encore initialisées. Retourne la valeur par défaut.");
      }
      return this.colorPrimary;
    }
  
    /**
     * Getter pour la couleur secondaire
     */
    get secondary(): string {
      if (!this.isInitialized) {
        console.warn("Les couleurs n'ont pas était encore initialisées. Retourne la valeur par défaut.");
      }
      return this.colorSecondary;
    }
  
    /**
     * Getter pour la couleur tertiaire
     */
    get tertiary(): string {
      if (!this.isInitialized) {
        console.warn("Les couleurs n'ont pas était encore initialisées. Retourne la valeur par défaut.");
      }
      return this.colorTertiary;
    }
  
    /**
     * Méthode privée pour initialiser les couleurs via l'API
     */
    private async initColors(): Promise<void> {
      try {
        const data = await this.fetchColorsFromAPI(this.scenarioId);
        this.colorPrimary = data.color_primary || this.colorPrimary;
        this.colorSecondary = data.color_secondary || this.colorSecondary;
        this.colorTertiary = data.color_tertiary || this.colorTertiary;
        this.isInitialized = true; // Marquer comme initialisé
      } catch (error) {
        console.error('Error initializing colors:', error);
      }
    }
  
    /**
     * Méthode privée pour effectuer un appel à l'API
     */
    private async fetchColorsFromAPI(Id: number): Promise<any> {
      try {
        const response = await fetch(`http://localhost:8910/color-sets/${Id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching colors from API:', error);
        // Retourner des couleurs par défaut en cas d'échec
        return {
          color_primary: 'FFFFFF',
          color_secondary: 'FFFFFF',
          color_tertiary: 'FFFFFF',
        };
      }
    }
  }
  