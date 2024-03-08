import random

class RealmCard:
    def __init__(self, name, effect):
        self.name = name
        self.effect = effect

class RealmDeck:
    def __init__(self):
        self.cards = [
            RealmCard("Strength", "Boost your attack power!"),
            RealmCard("Wisdom", "Gain valuable knowledge!"),
            RealmCard("Fortune", "Increase your chances of success!"),
            RealmCard("Shadow", "Conceal yourself from enemies!"),
            RealmCard("Chaos", "Unleash unpredictable effects!"),
        ]
        random.shuffle(self.cards)

    def draw_card(self):
        if not self.cards:
            print("The deck is empty!")
            return None
        return self.cards.pop()

class RealmCardGame:
    def __init__(self):
        self.deck = RealmDeck()

    def play(self):
        print("Welcome to the Realm Card Game!")
        print("Let's draw a card:")
        card = self.deck.draw_card()
        if card:
            print(f"You drew: {card.name}")
            print(f"Effect: {card.effect}")

    def use_artifact(self):
        print("You activated a mystical artifact, altering the fabric of reality!")
        # Add custom effects for the artifact
