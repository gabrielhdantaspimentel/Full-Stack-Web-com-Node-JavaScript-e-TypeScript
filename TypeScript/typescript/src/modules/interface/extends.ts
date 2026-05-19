export const bootstrap = (): void => {
    
    interface PersonalInfo {
        fullName: string;
        email: string,
        dateOfBirth?: Date;
        sumary?: string;
    }
    
    interface Resume extends PersonalInfo {
        skills: Skill[], 
        addSkill?: (skill: Skill) => boolean
    } 

    interface Skill {
        name: string,
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    type Font

    interface Theme {
        font: 'roboto' | 'open sans';
        colorScheme: 'light' | 'dark';
        laryout: 'one-column' | 'two-column'
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: 'roboto' | 'open sans';  
        ){}

        addSkill(skill: Skill): boolean{
            const initialLenght = this.skills.length
            this.skills.push(skill)

            return this.skills.length > initialLenght
        }
    }

    const myResume = new MyResume(
        'Gabriel Henrique Dantas Pimentel', 
        'gabriel@email.com', 
        []
    )

    myResume.addSkill({name: 'JavaScript', level: 'beginner'})
    myResume.addSkill({name: 'TypeScript', level: 'intermediate'})
    console.log(myResume)

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
}
     