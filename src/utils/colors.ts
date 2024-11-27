export class Colors {
    color_primary: string = 'FFFFFF';
    color_secondary: string = 'FFFFFF';
    color_tertiary: string = 'FFFFFF';

    constructor(ScenarioId: number) {
        this.init(ScenarioId);
    }

    getColors(): string[] {
        return [this.color_primary, this.color_secondary, this.color_tertiary];
    }

    getColorPrimary(): string {
        return this.color_primary;
    }

    async init(ScenarioId: number): Promise<void> {
        try {
            const data = await this.getColorsToAPI(ScenarioId);
            this.color_primary = data.color_primary;
            this.color_secondary = data.color_secondary;
            this.color_tertiary = data.color_tertiary;
        } catch (error) {
            console.error('Error fetching colors:', error);
        }
    }

    getColorSecondary(): string {
        return this.color_secondary;
    }

    getColorTertiary(): string {
        return this.color_tertiary;
    }

    async getColorsToAPI(ScenarioId: number): Promise<any> {
        try {
            const response = await fetch(`http://localhost:8910/color-sets/${ScenarioId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching colors:', error);
            return {
                color_primary: 'FFFFFF',
                color_secondary: 'FFFFFF',
                color_tertiary: 'FFFFFF',
            }; // Valeurs par défaut en cas d'erreur
        }
    }
}
