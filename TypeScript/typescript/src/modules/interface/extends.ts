export const bootstrap = (): void => {
  interface PersonalInfo {
    fullName: string;
    email: string;
    dateOfBirth?: Date;
    sumary?: string;
  }

  interface Resume extends PersonalInfo {
    skills: Skill[];
    addSkill?: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  type Font = 'roboto' | 'open sans' | 'poppins';
  type ColorScheme = 'light' | 'dark';
  type Layout = 'one-column' | 'two-column';

  interface Theme {
    font: Font;
    colorScheme: ColorScheme;
    laryout: Layout;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorScheme: ColorScheme,
      public laryout: Layout,
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
    "roboto",
    "dark",
    "two-column",
  );

  myResume.addSkill({ name: 'JavaScript', level: 'beginner' });
  myResume.addSkill({ name: 'TypeScript', level: 'intermediate' });
  console.log(myResume);

  /*
    const MyResume: Resume = {
        fullName: 'Gabriel Henrique Dantas Pimentel',
        email: 'gabriel@email.com',
        skills: [
            {name: 'JavaScript', level: 'beginner'},
            {name: 'TypeScript', level: 'intermediate'},
        ]
    }

    console.log(MyResume)
    */
};
