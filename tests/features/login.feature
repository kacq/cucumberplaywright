Feature: Login to the application

@test
  Scenario: Test
    Given Klient otwiera wniosek https://ewnioski.velobank.pl/eWniosekNoAuth/WizardWfB.aspx?path=GNB-Guest-MROR-MROR&l=greenish&FieldString18=CREDIT&FieldString13=GB

  Scenario: Drugi test
    Given Klient otwiera wniosek https://google.pl