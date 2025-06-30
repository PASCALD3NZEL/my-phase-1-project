document.getElementById('requestForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    let phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const system = document.querySelector('input[name="system"]:checked');
    const systemSize = document.getElementById('systemSize').value.trim();
    const flowRate = document.getElementById('flowRate').value.trim();
    const diameter = document.getElementById('diameter').value.trim();
    const depth = document.getElementById('depth').value.trim();
    const installationDate = document.getElementById('installationDate').value.trim();
    const budget = document.getElementById('budget').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Strict phone validation: must be digits and at least 7 digits
    if (!/^\d{7,}$/.test(phone)) {
        let statusMsg = document.getElementById('status-message');
        if (!statusMsg) {
            statusMsg = document.createElement('div');
            statusMsg.id = 'status-message';
            statusMsg.style.marginTop = '16px';
            statusMsg.style.color = 'red';
            document.getElementById('requestForm').appendChild(statusMsg);
        }
        statusMsg.textContent = "Please enter a valid phone number (digits only, minimum 7 digits).";
        return;
    }

    // Prepend country code if not present
    const code = countryCodes[country] || '';
    if (code && !phone.startsWith(code.replace('+', ''))) {
        phone = code + phone;
    }

    // Get the message element (create if not present)
    let statusMsg = document.getElementById('status-message');
    if (!statusMsg) {
        statusMsg = document.createElement('div');
        statusMsg.id = 'status-message';
        statusMsg.style.marginTop = '16px';
        statusMsg.style.color = '#00796b';
        document.getElementById('requestForm').appendChild(statusMsg);
    }

    if (name && email && country && phone && location && system) {
        const requestData = {
            name,
            email,
            country,
            phone,
            location,
            system: system.value,
            systemSize,
            flowRate,
            diameter,
            depth,
            installationDate,
            budget,
            comments
        };

     fetch("https://borehole-request-app.onrender.com/api/requests", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" }
});

            body: JSON.stringify(requestData)
        })
        .then(res => res.json())
        .then(data => {
            statusMsg.textContent = "Your request is being processed. You will receive a response soon.";
            statusMsg.style.color = "#00796b";
        })
        .catch(err => {
            console.error('Error:', err);
            statusMsg.textContent = "There was an issue saving your request.";
            statusMsg.style.color = "red";
        });
    } else {
        statusMsg.textContent = "Please fill in all fields and select a system to proceed.";
        statusMsg.style.color = "red";
    }
});

// Currency unit update
document.getElementById('country').addEventListener('change', function() {
    const budgetUnit = document.getElementById('budget-unit');
    switch (this.value) {
        case 'Kenya':
            budgetUnit.textContent = '(KES)';
            break;
        case 'Uganda':
            budgetUnit.textContent = '(UGX)';
            break;
        case 'Tanzania':
            budgetUnit.textContent = '(TZS)';
            break;
        case 'Rwanda':
            budgetUnit.textContent = '(RWF)';
            break;
        case 'Burundi':
            budgetUnit.textContent = '(BIF)';
            break;
        case 'South Sudan':
            budgetUnit.textContent = '(SSP)';
            break;
        case 'Somalia':
            budgetUnit.textContent = '(SOS)';
            break;
        case 'Ethiopia':
            budgetUnit.textContent = '(ETB)';
            break;
        case 'Djibouti':
            budgetUnit.textContent = '(DJF)';
            break;
        case 'Eritrea':
            budgetUnit.textContent = '(ERN)';
            break;
        case 'Comoros':
            budgetUnit.textContent = '(KMF)';
            break;
        case 'Seychelles':
            budgetUnit.textContent = '(SCR)';
            break;
        case 'Madagascar':
            budgetUnit.textContent = '(MGA)';
            break;
        case 'Mozambique':
            budgetUnit.textContent = '(MZN)';
            break;
        case 'Zambia':
            budgetUnit.textContent = '(ZMW)';
            break;
        case 'Zimbabwe':
            budgetUnit.textContent = '(ZWL)';
            break;
        case 'Malawi':
            budgetUnit.textContent = '(MWK)';
            break;
        case 'Botswana':
            budgetUnit.textContent = '(BWP)';
            break;
        case 'Namibia':
            budgetUnit.textContent = '(NAD)';
            break;
        case 'South Africa':
            budgetUnit.textContent = '(ZAR)';
            break;
        case 'Lesotho':
            budgetUnit.textContent = '(LSL)';
            break;
        case 'Eswatini':
            budgetUnit.textContent = '(SZL)';
            break;
        case 'Angola':
            budgetUnit.textContent = '(AOA)';
            break;
        case 'Congo':
            budgetUnit.textContent = '(CDF)';
            break;
        case 'Gabon':
            budgetUnit.textContent = '(XAF)';
            break;
        case 'Cameroon':
            budgetUnit.textContent = '(XAF)';
            break;
        case 'Central African Republic':
            budgetUnit.textContent = '(XAF)';
            break;
        case 'Chad':
            budgetUnit.textContent = '(XAF)';
            break;
        case 'Niger':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Nigeria':
            budgetUnit.textContent = '(NGN)';
            break;
        case 'Benin':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Togo':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Ghana':
            budgetUnit.textContent = '(GHS)';
            break;
        case "Côte d'Ivoire":
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Burkina Faso':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Mali':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Guinea':
            budgetUnit.textContent = '(GNF)';
            break;
        case 'Sierra Leone':
            budgetUnit.textContent = '(SLL)';
            break;
        case 'Liberia':
            budgetUnit.textContent = '(LRD)';
            break;
        case 'Senegal':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'The Gambia':
            budgetUnit.textContent = '(GMD)';
            break;
        case 'Guinea-Bissau':
            budgetUnit.textContent = '(XOF)';
            break;
        case 'Cape Verde':
            budgetUnit.textContent = '(CVE)';
            break;
        case 'Mauritania':
            budgetUnit.textContent = '(MRU)';
            break;
        case 'Equatorial Guinea':
            budgetUnit.textContent = '(XAF)';
            break;
        case 'São Tomé and Príncipe':
            budgetUnit.textContent = '(STN)';
            break;
        default:
            budgetUnit.textContent = '(USD)';
    }
});

const themeToggle = document.getElementById('theme-toggle');
let isLight = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isLight = !isLight;
    themeToggle.textContent = isLight ? '🌙' : '☀️';
});

// Phone number input handling
document.getElementById('phone').addEventListener('input', function () {
    // Allow only digits
    this.value = this.value.replace(/\D/g, '');
});

// Country code mapping
const countryCodes = {
    'Kenya': '+254',
    'Uganda': '+256',
    'Tanzania': '+255',
    'Rwanda': '+250',
    'Burundi': '+257',
    'South Sudan': '+211',
    'Somalia': '+252',
    'Ethiopia': '+251',
    'Djibouti': '+253',
    'Eritrea': '+291',
    'Comoros': '+269',
    'Seychelles': '+248',
    'Madagascar': '+261',
    'Mozambique': '+258',
    'Zambia': '+260',
    'Zimbabwe': '+263',
    'Malawi': '+265',
    'Botswana': '+267',
    'Namibia': '+264',
    'South Africa': '+27',
    'Lesotho': '+266',
    'Eswatini': '+268',
    'Angola': '+244',
    'Congo': '+243',
    'Gabon': '+241',
    'Cameroon': '+237',
    'Central African Republic': '+236',
    'Chad': '+235',
    'Niger': '+227',
    'Nigeria': '+234',
    'Benin': '+229',
    'Togo': '+228',
    'Ghana': '+233',
    "Côte d'Ivoire": '+225',
    'Burkina Faso': '+226',
    'Mali': '+223',
    'Guinea': '+224',
    'Sierra Leone': '+232',
    'Liberia': '+231',
    'Senegal': '+221',
    'The Gambia': '+220',
    'Guinea-Bissau': '+245',
    'Cape Verde': '+238',
    'Mauritania': '+222',
    'Equatorial Guinea': '+240',
    'São Tomé and Príncipe': '+239'
};

// Update phone placeholder with country code
document.getElementById('country').addEventListener('change', function () {
    const phoneInput = document.getElementById('phone');
    const code = countryCodes[this.value] || '';
    phoneInput.placeholder = code ? `e.g. ${code}7XXXXXXXX` : 'Phone Number';
});

// Add this mapping for country to locations
const countryLocations = {
    'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Machakos'],
    'Uganda': ['Kampala', 'Entebbe', 'Gulu', 'Mbarara', 'Jinja'],
    'Tanzania': ['Dar es Salaam', 'Dodoma', 'Arusha', 'Mwanza', 'Mbeya'],
    'Nigeria': ['Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt'],
    'Ghana': ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Tema'],
    'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
    'Zimbabwe': ['Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Masvingo'],
    'Zambia': ['Lusaka', 'Kitwe', 'Ndola', 'Livingstone', 'Chipata'],
    'Rwanda': ['Kigali', 'Butare', 'Gisenyi', 'Musanze', 'Rwamagana'],
    'Burundi': ['Bujumbura', 'Gitega', 'Ngozi', 'Muyinga', 'Rutana'],
    'Ethiopia': ['Addis Ababa', 'Dire Dawa', 'Mekelle', 'Bahir Dar', 'Gondar'],
    'Somalia': ['Mogadishu', 'Hargeisa', 'Bosaso    ', 'Kismayo', 'Baidoa'],
    'Malawi': ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 'Karonga'],
    'Botswana': ['Gaborone', 'Francistown', 'Molepolole', 'Maun', 'Selibe Phikwe'],
    'Namibia': ['Windhoek', 'Walvis Bay', 'Swakopmund', 'Oshakati', 'Rundu'],
    'Lesotho': ['Maseru',   'Maputsoe', 'Teyateyaneng', 'Mafeteng', 'Mokhotlong'],
    'Eswatini': ['Mbabane', 'Manzini', 'Lobamba', 'Nhlangano', 'Siteki'],
    'Angola': ['Luanda', 'Benguela', 'Lobito', 'Huambo', 'Lubango'],
    'Congo': ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kananga', 'Kolwezi'],
    'Gabon': ['Libreville', 'Port-Gentil', 'Franceville', 'Moanda', 'Oyem'],
    'Cameroon': ['Yaoundé', 'Douala', 'Garoua', 'Bamenda', 'Bafoussam'],
    'Central African Republic': ['Bangui', 'Berberati', 'Bimbo', 'Mbaïki', 'Kaga-Bandoro'],
    'Chad': ['N\'Djamena', 'Moundou', 'Sarh', 'Abéché', 'Kelo'],
    'Niger': ['Niamey', 'Zinder', 'Maradi', 'Agadez', 'Diffa'],
    'Benin': ['Cotonou', 'Porto-Novo', 'Parakou', 'Djougou', 'Bohicon'],
    'Togo': ['Lomé', 'Sokodé', 'Kara', 'Atakpamé', 'Tsévié'],
    'Burkina Faso': ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Banfora', 'Ouahigouya'],
    'Mali': ['Bamako', 'Ségou', 'Koutiala', 'Kayes', 'Sikasso'],
    'Guinea': ['Conakry', 'Nzérékoré', 'Kankan', 'Kindia', 'Boké'],
    'Sierra Leone': ['Freetown', 'Bo', 'Kenema', 'Makeni', 'Koidu'],
    'Liberia': ['Monrovia', 'Gbarnga', 'Buchanan', 'Zwedru', 'Harper'],
    'Senegal': ['Dakar', 'Saint-Louis', 'Thiès', 'Kaolack', 'Ziguinchor'],
    'The Gambia': ['Banjul', 'Serekunda', 'Brikama', 'Bakau', 'Kerewan'],
    'Guinea-Bissau': ['Bissau', 'Bafatá', 'Gabú', 'Cacheu', 'Bolama '],
    'Cape Verde': ['Praia', 'Mindelo', 'Santa Maria', 'Assomada', 'Porto Novo'],
    'Mauritania': ['Nouakchott', 'Nouadhibou', 'Rosso', 'Kiffa', 'Atar'],
    'Equatorial Guinea': ['Malabo', 'Bata', 'Ebebiyin', 'Aconibe', 'Evinayong'],
    'São Tomé and Príncipe': ['São Tomé', 'Principe', 'Santana', 'Trindade', 'Neves'],
    'Djibouti': ['Djibouti', 'Ali Sabieh', 'Tadjourah', 'Obock', 'Dikhil'],
    'Eritrea': ['Asmara', 'Keren', 'Mass '] ['Assab', 'Mendefera'], 
    'Comoros': ['Moroni', 'Moutsamoudou', 'Moyani', 'Domoni', 'Fomboni'],
    'Seychelles': ['Victoria', 'Anse Royale', 'Beau Vallon', 'Baie Lazare', 'Anse Boileau'],
    'Madagascar': ['Antananarivo', 'Toamasina', 'Antsirabe', 'Fianarantsoa', 'Mahajanga'],
    'Mozambique': ['Maputo', 'Beira', 'Nampula', 'Chimoio', 'Tete'],
    'Zambia': ['Lusaka', 'Kitwe', 'Ndola', 'Livingstone', 'Chipata'],
    'Zimbabwe': ['Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Masvingo'],
    'Malawi': ['Lilongwe', 'Blant '] 

    // ...add more countries and cities as needed
};

// Create datalist for location suggestions if not present
let locationDatalist = document.getElementById('location-list');
if (!locationDatalist) {
    locationDatalist = document.createElement('datalist');
    locationDatalist.id = 'location-list';
    document.body.appendChild(locationDatalist);
}

// Update location input to use datalist
const locationInput = document.getElementById('location');
locationInput.setAttribute('list', 'location-list');

// Update datalist options on country change
document.getElementById('country').addEventListener('change', function () {
    // ...existing code for phone placeholder and budget unit...

    // Location suggestions
    const locations = countryLocations[this.value] || [];
    locationDatalist.innerHTML = '';
    locations.forEach(place => {
        const option = document.createElement('option');
        option.value = place;
        locationDatalist.appendChild(option);
    });
});

// Remove or comment out the OK button click handler
// document.getElementById('ok-btn').addEventListener('click', () => {
//     document.getElementById('popup').style.display = "none";
// });
