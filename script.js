 // All 22 Major Arcana Tarot Cards with predictions
        const allCards = [
            {
                name: "0. The Fool (मूर्ख)",
                prediction: "एक नई शुरुआत का समय है, बिना डर के आगे बढ़ें।",
                funny: "पर याद रखें, बिना पैंट पहने घर से न निकलें!"
            },
            {
                name: "I. The Magician (जादूगर)",
                prediction: "आपके पास सभी संसाधन हैं, अपनी क्षमताओं का उपयोग करें।",
                funny: "पर ये जादू आपके WiFi को फिर से नहीं चला पाएगा!"
            },
            {
                name: "II. The High Priestess (पुजारिन)",
                prediction: "अपने अंतर्ज्ञान पर भरोसा करें, रहस्यों को समझें।",
                funny: "आपको पहले से पता था कि मैं यही कहूँगा, है ना?"
            },
            {
                name: "III. The Empress (रानी)",
                prediction: "प्रचुरता और रचनात्मकता का समय है।",
                funny: "समय आ गया है वो TikTok डांस वीडियो बनाने का!"
            },
            {
                name: "IV. The Emperor (राजा)",
                prediction: "अनुशासन और नियंत्रण की आवश्यकता है।",
                funny: "मतलब आज आप ही TV का रिमोट कंट्रोल संभालेंगे!"
            },
            {
                name: "V. The Hierophant (धर्मगुरु)",
                prediction: "पारंपरिक मूल्यों और शिक्षा पर ध्यान दें।",
                funny: "पर ये कार्ड आपको परीक्षा में नकल करने की अनुमति नहीं देता!"
            },
            {
                name: "VI. The Lovers (प्रेमी)",
                prediction: "प्रेम और सामंजस्य का समय है।",
                funny: "या फिर Zomato का नया डिलीवरी बॉय आपका ऑर्डर लेकर आएगा!"
            },
            {
                name: "VII. The Chariot (रथ)",
                prediction: "इच्छाशक्ति और सफलता की ओर बढ़ें।",
                funny: "शायद वॉशरूम तक... क्योंकि आपने बहुत चाय पी ली है!"
            },
            {
                name: "VIII. Strength (शक्ति)",
                prediction: "आंतरिक शक्ति और धैर्य दिखाने का समय।",
                funny: "पर प्लीज दूध की डब्बी खोलते समय ये शक्ति याद रखना!"
            },
            {
                name: "IX. The Hermit (साधु)",
                prediction: "अकेले समय बिताएं, आत्म-चिंतन करें।",
                funny: "मतलब आज नहीं करना है 'घर वालों के साथ बैठक'!"
            },
            {
                name: "X. Wheel of Fortune (भाग्य चक्र)",
                prediction: "भाग्य में बदलाव आने वाला है।",
                funny: "या तो आपको मिलेगा प्रमोशन... या मिलेगा नया बॉस!"
            },
            {
                name: "XI. Justice (न्याय)",
                prediction: "निष्पक्षता और संतुलन का समय।",
                funny: "अगर आपने किसी का चॉकलेट चुराया है, तो अब समय है स्वीकार करने का!"
            },
            {
                name: "XII. The Hanged Man (लटका हुआ आदमी)",
                prediction: "नए दृष्टिकोण की आवश्यकता है।",
                funny: "शायद ये बताने का तरीका है कि आपका WiFi पासवर्ड फिर से काम नहीं कर रहा!"
            },
            {
                name: "XIII. Death (मृत्यु)",
                prediction: "परिवर्तन का समय, पुराने का अंत और नए की शुरुआत।",
                funny: "घबराएं नहीं... ये सिर्फ आपके फोन की बैटरी के बारे में हो सकता है!"
            },
            {
                name: "XIV. Temperance (संयम)",
                prediction: "संतुलन और मध्यम मार्ग अपनाएं।",
                funny: "मतलब आज न तो ज्यादा खाना है, न ही ज्यादा उपवास करना है!"
            },
            {
                name: "XV. The Devil (शैतान)",
                prediction: "बंधनों और लतों से सावधान रहें।",
                funny: "जी हाँ, Instagram रील्स स्क्रॉल करना भी एक लत है!"
            },
            {
                name: "XVI. The Tower (मीनार)",
                prediction: "अचानक परिवर्तन और विघटन।",
                funny: "शायद आपका फोन अभी किसी भी समय अपडेट शुरू कर देगा!"
            },
            {
                name: "XVII. The Star (तारा)",
                prediction: "आशा और आध्यात्मिक मार्गदर्शन।",
                funny: "पर ये नहीं बताता कि आपका 'लकी स्टार' कब तक चलेगा!"
            },
            {
                name: "XVIII. The Moon (चंद्रमा)",
                prediction: "भ्रम और भय पर काबू पाएं।",
                funny: "शायद ये बताने का तरीका है कि आप रात को ज्यादा नेटफ्लिक्स देख रहे हैं!"
            },
            {
                name: "XIX. The Sun (सूर्य)",
                prediction: "आनंद, सफलता और सकारात्मकता।",
                funny: "मतलब आज आपका दिन बिना 'अरे यार!' के गुजरेगा!"
            },
            {
                name: "XX. Judgement (निर्णय)",
                prediction: "आत्म-मूल्यांकन और नई शुरुआत।",
                funny: "समय आ गया है उन सभी पेंडिंग मैसेज्स का जवाब देने का!"
            },
            {
                name: "XXI. The World (विश्व)",
                prediction: "पूर्णता और सफलता प्राप्ति।",
                funny: "और हाँ, अब आप आधिकारिक तौर पर 'दुनिया घूमने के लिए पैसे जोड़ना शुरू कर सकते हैं'!"
            }
        ];

        let currentDeck = [];
        let selectedCardIndex = -1;

        // Initialize the game
        function initGame() {
            showThreeCards();
        }

        // Show all 22 cards
        function showAllCards() {
            const deckElement = document.getElementById('deck');
            deckElement.innerHTML = '';
            
            currentDeck = [...allCards];
            
            currentDeck.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card card-back';
                cardElement.onclick = () => drawCard(index);
                deckElement.appendChild(cardElement);
            });
        }

        // Show only 3 random cards
        function showThreeCards() {
            const deckElement = document.getElementById('deck');
            deckElement.innerHTML = '';
            
            // Shuffle and pick 3 random cards
            currentDeck = [...allCards].sort(() => 0.5 - Math.random()).slice(0, 3);
            
            currentDeck.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card card-back';
                cardElement.onclick = () => drawCard(index);
                deckElement.appendChild(cardElement);
            });
        }

        function drawCard(cardIndex) {
            selectedCardIndex = cardIndex;
            
            // Hide all cards
            const allCardElements = document.querySelectorAll('.card');
            allCardElements.forEach(card => {
                card.style.display = 'none';
            });
            
            // Show selected card
            const selectedCard = allCardElements[cardIndex];
            selectedCard.style.display = 'flex';
            selectedCard.classList.add('selected');
            selectedCard.textContent = currentDeck[cardIndex].name.split(' ')[0]; // Show just the number
            
            // Display result
            document.getElementById('card-name').textContent = currentDeck[cardIndex].name;
            document.getElementById('prediction').textContent = currentDeck[cardIndex].prediction;
            document.getElementById('funny').textContent = currentDeck[cardIndex].funny;
            
            document.getElementById('result').style.display = 'block';
            
            // Scroll to result
            document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
        }

        function resetCards() {
            const allCardElements = document.querySelectorAll('.card');
            allCardElements.forEach(card => {
                card.style.display = 'flex';
                card.classList.remove('selected');
                card.classList.add('card-back');
                card.textContent = '';
            });
            
            document.getElementById('result').style.display = 'none';
        }

        // Initialize the game when page loads
        window.onload = initGame;