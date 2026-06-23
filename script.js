// ============================================
// ANDORA SKINCARE APP - MAIN SCRIPT
// ============================================

/**
 * Estado global de la aplicación
 */
const appState = {
    currentScreen: 'login',
    selectedCategory: 'cremas',
    selectedProduct: 'hidratante',
    messages: [
        {
            id: 1,
            from: 'andora',
            text: '¡Hola Ruby! Soy Verónica, tu asesora Andora. ¿Cómo va tu rutina hoy?'
        },
        {
            id: 2,
            from: 'me',
            text: 'Hola Verónica, necesito una recomendación para mi piel seca.'
        },
        {
            id: 3,
            from: 'andora',
            text: 'Claro. Para piel seca te sugiero la Crema Humectante por la noche y mantenerte muy bien hidratada. ¿Quieres que la agregue a tu rutina?'
        }
    ],
    completedDays: 7,
    totalDays: 31
};

/**
 * Configuración de categorías
 */
const categories = [
    { id: 'cremas', name: 'Cremas', desc: 'Hidratación profunda y cuidado diario', icon: '💧' },
    { id: 'lociones', name: 'Lociones', desc: 'Nutrición ligera para tu piel', icon: '🧴' },
    { id: 'jabones', name: 'Jabones', desc: 'Limpieza consciente', icon: '🫧' },
    { id: 'desodorantes', name: 'Desodorantes', desc: 'Protección natural', icon: '💨' },
    { id: 'bloqueadores', name: 'Bloqueadores', desc: 'Protección solar', icon: '☀️' },
    { id: 'mascarillas', name: 'Mascarillas', desc: 'Tratamientos especiales', icon: '✨' }
];

/**
 * Configuración de productos
 */
const products = [
    { id: 'humectante', name: 'Crema Humectante', desc: 'Hidratación profunda que repara la barrera natural y equilibra.', img: 'assets/images/product-humectante.png' },
    { id: 'hidratante', name: 'Crema Hidratante', desc: 'Nutre y revitaliza la piel con extractos botánicos y luminosidad.', img: 'assets/images/product-hidratante.png' },
    { id: 'antiarrugas', name: 'Crema Anti-arrugas', desc: 'Mejora la elasticidad y suaviza las líneas de expresión.', img: 'assets/images/product-antiarrugas.png' }
];

/**
 * Configuración de recompensas
 */
const rewards = [
    { icon: '🎁', title: 'Envío gratis', sub: 'Disponible ahora', ready: true },
    { icon: '⭐', title: '15% de descuento', sub: 'Faltan 120 puntos', ready: false },
    { icon: '🍃', title: 'Mascarilla de regalo', sub: 'Faltan 400 puntos', ready: false }
];

/**
 * Renderizar una pantalla específica
 */
function renderScreen(screenName) {
    const screenElement = document.getElementById('screen');
    const template = document.getElementById(`${screenName}-screen`);
    
    if (!template) {
        console.error(`Template not found for screen: ${screenName}`);
        return;
    }

    // Clonar el template
    const screenContent = template.content.cloneNode(true);
    
    // Limpiar la pantalla anterior
    screenElement.innerHTML = '';
    
    // Agregar el nuevo contenido
    screenElement.appendChild(screenContent);
    
    // Actualizar el estado
    appState.currentScreen = screenName;
    
    // Mostrar/ocultar navegación
    const navScreens = ['home', 'chat', 'progress', 'cards', 'profile'];
    const bottomNav = document.getElementById('bottom-nav');
    
    if (navScreens.includes(screenName)) {
        renderBottomNav(screenName);
        bottomNav.classList.remove('hidden');
    } else {
        bottomNav.classList.add('hidden');
    }
    
    // Inicializar interactividad de la pantalla
    initializeScreenInteractions(screenName);
}

/**
 * Renderizar navegación inferior
 */
function renderBottomNav(activeScreen) {
    const navElement = document.getElementById('bottom-nav');
    const template = document.getElementById('bottom-nav');
    
    if (!template) return;
    
    const navContent = template.content.cloneNode(true);
    
    // Establecer screen activa
    navContent.querySelectorAll('.nav-item, .nav-center').forEach(item => {
        const screen = item.getAttribute('data-screen');
        if (screen === activeScreen) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
        
        // Agregar event listeners
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToScreen(screen);
        });
    });
    
    navElement.innerHTML = '';
    navElement.appendChild(navContent);
}

/**
 * Navegar a una pantalla
 */
function navigateToScreen(screenName) {
    renderScreen(screenName);
    window.scrollTo(0, 0);
}

/**
 * Inicializar interactividad específica de cada pantalla
 */
function initializeScreenInteractions(screenName) {
    switch(screenName) {
        case 'login':
            initLoginScreen();
            break;
        case 'welcome':
            initWelcomeScreen();
            break;
        case 'greeting':
            initGreetingScreen();
            break;
        case 'categories':
            initCategoriesScreen();
            break;
        case 'recommendation':
            initRecommendationScreen();
            break;
        case 'process':
            initProcessScreen();
            break;
        case 'home':
            initHomeScreen();
            break;
        case 'chat':
            initChatScreen();
            break;
        case 'progress':
            initProgressScreen();
            break;
        case 'cards':
            initCardsScreen();
            break;
        case 'profile':
            initProfileScreen();
            break;
    }
}

// ============================================
// SCREEN INITIALIZATION FUNCTIONS
// ============================================

/**
 * Inicializar pantalla de login
 */
function initLoginScreen() {
    const form = document.getElementById('login-form');
    const googleBtn = document.querySelector('.google-btn');
    const signupLink = document.querySelector('.signup-link');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            navigateToScreen('welcome');
        });
    }
    
    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            navigateToScreen('welcome');
        });
    }
    
    if (signupLink) {
        signupLink.addEventListener('click', () => {
            alert('Función de registro no disponible en demo');
        });
    }
}

/**
 * Inicializar pantalla de bienvenida
 */
function initWelcomeScreen() {
    const welcomeBtn = document.querySelector('.welcome-btn');
    
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            navigateToScreen('greeting');
        });
    }
}

/**
 * Inicializar pantalla de saludo
 */
function initGreetingScreen() {
    const greetingBtn = document.querySelector('.greeting-btn');
    
    if (greetingBtn) {
        greetingBtn.addEventListener('click', () => {
            navigateToScreen('categories');
        });
    }
}

/**
 * Inicializar pantalla de categorías
 */
function initCategoriesScreen() {
    const backBtn = document.querySelector('.back-btn');
    const continueBtn = document.querySelector('.continue-btn');
    const categoriesList = document.getElementById('categories-list');
    
    // Renderizar categorías
    if (categoriesList) {
        categories.forEach(cat => {
            const categoryItem = document.createElement('button');
            categoryItem.type = 'button';
            categoryItem.className = `category-item ${cat.id === appState.selectedCategory ? 'active' : ''}`;
            categoryItem.innerHTML = `
                <div class="category-icon">
                    <span style="font-size: 24px;">${cat.icon}</span>
                </div>
                <div class="category-text">
                    <span class="category-name">${cat.name}</span>
                    <span class="category-desc">${cat.desc}</span>
                </div>
                <svg class="category-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            `;
            
            categoryItem.addEventListener('click', () => {
                document.querySelectorAll('.category-item').forEach(item => {
                    item.classList.remove('active');
                });
                categoryItem.classList.add('active');
                appState.selectedCategory = cat.id;
            });
            
            categoriesList.appendChild(categoryItem);
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateToScreen('greeting');
        });
    }
    
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            navigateToScreen('recommendation');
        });
    }
}

/**
 * Inicializar pantalla de recomendación
 */
function initRecommendationScreen() {
    const backBtn = document.querySelector('.back-btn');
    const continueBtn = document.querySelector('.continue-btn');
    const productsList = document.getElementById('products-list');
    
    // Renderizar productos
    if (productsList) {
        products.forEach(product => {
            const productItem = document.createElement('button');
            productItem.type = 'button';
            productItem.className = `product-item ${product.id === appState.selectedProduct ? 'selected' : ''}`;
            productItem.innerHTML = `
                <div class="product-thumb">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='assets/images/product-serum.png'">
                </div>
                <div class="product-info">
                    <span class="product-name">${product.name}</span>
                    <span class="product-desc">${product.desc}</span>
                </div>
                ${product.id === appState.selectedProduct ? `
                    <div class="product-check">✓</div>
                ` : ''}
            `;
            
            productItem.addEventListener('click', () => {
                document.querySelectorAll('.product-item').forEach(item => {
                    item.classList.remove('selected');
                    item.querySelector('.product-check')?.remove();
                });
                productItem.classList.add('selected');
                const check = document.createElement('div');
                check.className = 'product-check';
                check.textContent = '✓';
                productItem.appendChild(check);
                appState.selectedProduct = product.id;
            });
            
            productsList.appendChild(productItem);
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateToScreen('categories');
        });
    }
    
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            navigateToScreen('process');
        });
    }
}

/**
 * Inicializar pantalla de proceso
 */
function initProcessScreen() {
    const backBtn = document.querySelector('.back-btn');
    const continueBtn = document.querySelector('.continue-btn');
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateToScreen('recommendation');
        });
    }
    
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            navigateToScreen('home');
        });
    }
}

/**
 * Inicializar pantalla de inicio
 */
function initHomeScreen() {
    const menuBtn = document.querySelector('.btn-icon');
    const notificationBtn = document.querySelector('.notification-btn');
    const profileBtn = document.querySelector('.profile-btn');
    const chatBtn = document.querySelector('.chat-btn');
    const progressBtn = document.querySelector('.progress-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Menú no disponible en esta demo');
        });
    }
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            alert('No hay notificaciones nuevas');
        });
    }
    
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            navigateToScreen('profile');
        });
    }
    
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            navigateToScreen('chat');
        });
    }
    
    if (progressBtn) {
        progressBtn.addEventListener('click', () => {
            navigateToScreen('progress');
        });
    }
}

/**
 * Inicializar pantalla de chat
 */
function initChatScreen() {
    const backBtn = document.querySelector('.back-btn');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const quickReplies = document.querySelectorAll('.quick-reply');
    const messagesContainer = document.getElementById('messages-container');
    
    // Renderizar mensajes
    renderChatMessages();
    
    // Event listeners para quick replies
    quickReplies.forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.textContent);
        });
    });
    
    // Event listener para el formulario
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (messageInput && messageInput.value.trim()) {
                sendMessage(messageInput.value.trim());
                messageInput.value = '';
            }
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateToScreen('home');
        });
    }
}

/**
 * Renderizar mensajes del chat
 */
function renderChatMessages() {
    const messagesContainer = document.getElementById('messages-container');
    if (!messagesContainer) return;
    
    messagesContainer.innerHTML = '';
    
    appState.messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message from-${msg.from}`;
        messageDiv.innerHTML = `<p>${msg.text}</p>`;
        messagesContainer.appendChild(messageDiv);
    });
    
    // Scroll al final
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Enviar mensaje en el chat
 */
function sendMessage(text) {
    appState.messages.push({
        id: Date.now(),
        from: 'me',
        text: text
    });
    
    renderChatMessages();
    
    // Simular respuesta
    setTimeout(() => {
        appState.messages.push({
            id: Date.now() + 1,
            from: 'andora',
            text: 'Perfecto, lo dejo anotado. Recuerda que la constancia es tu mejor aliada para una piel radiante.'
        });
        renderChatMessages();
    }, 600);
}

/**
 * Inicializar pantalla de progreso
 */
function initProgressScreen() {
    const calendarGrid = document.getElementById('calendar-grid');
    
    // Renderizar calendario
    if (calendarGrid) {
        for (let day = 1; day <= appState.totalDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            if (day <= appState.completedDays) {
                dayElement.classList.add('completed');
            } else if (day === appState.completedDays + 1) {
                dayElement.classList.add('today');
            } else {
                dayElement.classList.add('upcoming');
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }
}

/**
 * Inicializar pantalla de tarjetas
 */
function initCardsScreen() {
    const rewardsList = document.getElementById('rewards-list');
    
    // Renderizar recompensas (ya están en HTML, pero podemos agregarles interactividad)
    const rewardItems = document.querySelectorAll('.reward-item');
    rewardItems.forEach(item => {
        item.addEventListener('click', () => {
            const badge = item.querySelector('.reward-badge');
            if (badge && badge.textContent === 'Canjear') {
                alert('¡Recompensa canjeada exitosamente!');
            } else {
                alert('Debes acumular más puntos para canjear esta recompensa');
            }
        });
    });
}

/**
 * Inicializar pantalla de perfil
 */
function initProfileScreen() {
    const menuItems = document.querySelectorAll('.menu-item');
    const logoutBtn = document.querySelector('.btn-logout');
    
    // Agregar interactividad a items del menú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const label = item.querySelector('.menu-label').textContent;
            alert(`Navegando a: ${label}`);
        });
    });
    
    // Botón de logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            navigateToScreen('login');
        });
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializar la aplicación
 */
function initApp() {
    // Crear estructura de carpetas de assets si es necesario
    console.log('Andora Skincare App iniciado');
    
    // Renderizar pantalla inicial
    navigateToScreen('login');
}

// Iniciar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);

// ============================================
// UTILIDADES
// ============================================

/**
 * Crear elemento SVG desde string
 */
function createSVG(svgString) {
    const div = document.createElement('div');
    div.innerHTML = svgString;
    return div.firstChild;
}

/**
 * Mostrar notificación
 */
function showNotification(message, duration = 2000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #6b8200;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 9999;
        animation: slideDown 300ms ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}
