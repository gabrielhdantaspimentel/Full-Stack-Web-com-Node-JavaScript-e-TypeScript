interface PersonalInfo {
    /**
     * Nome completo
     */
  fullName: string;
  email: string;
  /**
   * new Date()
   */
  dateOfBirth?: Date;
  sumary?: string;
}

/**
 * Interface utilizada para criação de currículos
 */

interface Resume extends PersonalInfo {
  skills: Skill[];
  addSkill?: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Theme {
  font: Font;
  colorScheme: ColorScheme;
  laryout: Layout;
}
