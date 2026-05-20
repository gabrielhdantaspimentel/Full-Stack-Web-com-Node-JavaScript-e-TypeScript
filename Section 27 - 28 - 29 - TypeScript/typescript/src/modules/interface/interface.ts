export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string,
        skills: Skill[], 
        addSkill?: (skill: Skill) => boolean
    }

    interface Skill {
        name: string,
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    const MyResume: Resume = {
        fullName: 'Gabriel Henrique Dantas Pimentel',
        email: 'gabriel@email.com',
        skills: [
            {name: 'JavaScript', level: 'intermediate'},
            {name: 'JavaScript', level: 'intermediate'},
        ]
    }

    console.log(MyResume)
}