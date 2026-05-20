export const bootstrap = (): void => {
  type Font = 'roboto' | 'open sans' | 'poppins';
  type ColorScheme = 'light' | 'dark';
  type Layout = 'one-column' | 'two-column';

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorScheme: ColorScheme,
      public laryout: Layout,
      public dateOfBirth: Date
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLenght = this.skills.length;
      this.skills.push(skill);

      return this.skills.length > initialLenght;
    }
  }

  const myResume = new MyResume(
    'Gabriel Henrique Dantas Pimentel',
    'gabriel@email.com',
    [],
    'roboto',
    'dark',
    'two-column',
    new Date('200-01-02'),
  );

  myResume.addSkill({ name: 'JavaScript', level: 'beginner' });
  myResume.addSkill({ name: 'TypeScript', level: 'intermediate' });
  console.log(myResume);
};
