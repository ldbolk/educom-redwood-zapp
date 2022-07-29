export const standard = defineScenario({
  bezoek: {
    one: {
      data: {
        klant: {
          create: {
            naam: 'String',
            email: 'String9726749',
            hashedPassword: 'String',
            salt: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },

        medewerker: {
          create: {
            naam: 'String',
            email: 'String8098138',
            hashedPassword: 'String',
            salt: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },
      },
    },

    two: {
      data: {
        klant: {
          create: {
            naam: 'String',
            email: 'String7717099',
            hashedPassword: 'String',
            salt: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },

        medewerker: {
          create: {
            naam: 'String',
            email: 'String2000591',
            hashedPassword: 'String',
            salt: 'String',
            adres: 'String',
            postcode: 'String',
            woonplaats: 'String',
          },
        },
      },
    },
  },
})
