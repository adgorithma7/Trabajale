# Trabájale: comparativa de dominio y método de registro

Fecha de consulta: 20 de octubre de 2026. Los precios de dominios cambian; confirma el total en el carrito antes de pagar.

---

## 1. Disponibilidad de nombres

Verificado directamente contra los registros oficiales (RDAP).

| Dominio | Estado | Detalle |
|---|---|---|
| **trabajale.ai** | **LIBRE** | Disponible para registrar hoy. |
| trabajale.com | OCUPADO | Registrado en marzo de 2022 vía IONOS. Página aparcada ("New Domain"), sin uso real. Vence el 4 de marzo de 2027. |
| trabajale.net | Libre | Opción barata para redirección. |
| trabajale.co | Libre | Opción barata para redirección. ~20 USD el primer año, ~38 USD renovación. |
| trabajale.com.ve | Libre | Registro venezolano (NIC.ve), proceso lento y poco confiable. No recomendado. |

**Sobre el .com:** está en manos de alguien que no lo usa. Se podría intentar comprarlo al dueño o esperar a ver si no renueva en marzo de 2027, pero ninguna de las dos es segura. No condicionar el proyecto a eso.

---

## 2. Precios de trabajale.ai por registrador

Regla del .ai: mínimo 2 años en el primer registro. Las renovaciones también van de 2 en 2 años.

| Registrador | Precio por año | Total primeros 2 años | Renovación cada 2 años | Privacidad WHOIS | Fuente |
|---|---|---|---|---|---|
| **Spaceship** | 79.98 USD | **159.96 USD** | 159.96 USD | Gratis | tld-list (actualizado hoy) |
| **Cloudflare Registrar** | 80.00 USD | **160.00 USD** | 160.00 USD | Gratis | tld-list (actualizado hoy). Cloudflare solo muestra el precio dentro de la cuenta. |
| **Porkbun** | 82.70 USD | **165.40 USD** | 165.40 USD | Gratis | Página oficial de Porkbun |
| **Namecheap** | 89.98 USD | **179.96 USD** | **229.96 USD** (114.98/año) | Gratis | Página oficial de Namecheap + tld-list |
| Epik | ~74.95 USD (sin confirmar) | ~149.90 USD | ~149.90 USD | ? | Solo agregadores de terceros; su web bloqueó la consulta. |

### Lectura honesta de la tabla

- **Namecheap queda descartado para .ai.** Se ve barato en la portada pero la renovación sube a 114.98 USD por año. En 4 años pagarías unos 410 USD frente a 320 USD en Spaceship o Cloudflare.
- **Epik parece el más barato, pero no lo recomiendo.** No pude confirmar el precio en su sitio, y la empresa tuvo una filtración masiva de datos en 2021 y problemas financieros en 2022 y 2023 en los que clientes perdieron fondos. Para un proyecto cuya moneda es la confianza, no vale la pena ahorrar 10 USD ahí.
- **Spaceship, Cloudflare y Porkbun están a menos de 6 USD de diferencia** en 2 años, y los tres cobran lo mismo al renovar. La decisión no es por precio, es por comodidad.

### Recomendación: Cloudflare Registrar

Razones:

1. Vas a usar Cloudflare de todas formas para el hosting (Pages), el correo (Email Routing) y las métricas (Web Analytics). Tener el dominio ahí mismo significa **una sola cuenta** con verificación en dos pasos, a tu nombre, para todo el proyecto. Eso cumple tu regla de seguridad con el mínimo de cuentas posibles.
2. Cloudflare vende los dominios a precio de costo, sin márgenes ni subidas sorpresa en la renovación.
3. La conexión dominio-hosting-certificado SSL es automática. Sin configurar DNS a mano.

Única desventaja: hay que crear la cuenta de Cloudflare primero y agregar el dominio para ver el precio exacto. Es un paso de 5 minutos que tú haces.

**Alternativa si Cloudflare no te convence:** Spaceship. Es la filial moderna de Namecheap, el más barato confirmado, acepta PayPal y Google Pay, y luego se apunta el dominio a Cloudflare con 2 registros DNS.

### Dominio de redirección (opcional)

No es necesario para lanzar. Si quieres uno, trabajale.co o trabajale.net cuestan entre 10 y 20 USD el primer año. Yo esperaría a ver si el proyecto funciona antes de gastar en esto.

---

## 3. Método de registro de candidatos

Cuatro opciones reales para que la gente se registre. Comparadas en lo que importa para este proyecto: costo, confianza del usuario, dónde quedan los datos, spam y esfuerzo.

| Criterio | A) Google Forms incrustado | B) Tally incrustado | C) Formulario propio (Cloudflare) | D) Servicio tipo Formspree |
|---|---|---|---|---|
| Costo | 0 | 0 (uso justo) | 0 | 0 hasta 50 a 250 envíos al mes, luego de pago |
| Dónde quedan los datos | Google Sheets automático | Panel de Tally, exportable a Sheets | Base de datos Cloudflare D1 y/o Google Sheets | Panel del servicio, correo |
| Apariencia dentro de tu página | Se nota que es Google | Limpio, marca Tally pequeña | 100% tu marca y tus colores | Depende |
| Confianza para un público desconfiado | Media. "¿Por qué una empresa seria usa un Google Form?" | Media-alta | Alta | Media |
| Protección antispam | Casi nula | Captcha básico | Turnstile de Cloudflare, invisible y gratis | Captcha básico |
| Validar que el WhatsApp es real | No | No | Sí, con botón "confirma por WhatsApp" | No |
| Funciona bien en celular | Sí | Muy bien | Sí, lo controlo yo | Sí |
| Mantenimiento | Cero | Cero | Bajo (código que yo mantengo) | Cero |
| Esfuerzo para lanzar | 15 minutos | 20 minutos | 1 día de trabajo mío | 20 minutos |
| Dependencia de terceros | Google | Tally (empresa pequeña) | Cloudflare (ya la usas) | Un proveedor más |

### Lectura honesta

- **Google Forms (tu propuesta original)** es la opción de menor riesgo técnico y cumple todo lo que pediste. Su problema es de percepción, no de función. En un sector lleno de estafas de empleo, un formulario con logo de Google resta algo de credibilidad, y sin antispam real la hoja se va a llenar de basura cuando empieces a mover tráfico.
- **Tally** es mejor que Google Forms en apariencia y en móvil, con el mismo esfuerzo. Pero es una empresa pequeña, el plan gratis depende de "uso justo" sin límite definido, y agrega un tercero más a la lista de cuentas que debes controlar.
- **Formulario propio** es el único que resuelve confianza, spam y validación de WhatsApp a la vez, y no agrega cuentas nuevas porque corre en el mismo Cloudflare. El costo es un día de trabajo mío y que, si algo falla, hay que arreglar código en lugar de reiniciar un formulario.
- **Formspree y similares** no tienen sentido aquí: el límite gratuito es bajo y no aportan nada que las otras opciones no den.

### Recomendación: empezar con A, migrar a C

1. **Lanzar con Google Forms incrustado dentro de la página.** La persona no sale de trabajale.ai, las respuestas caen en tu hoja de cálculo, y tú tienes control total desde el primer día. Lo que pediste.
2. **Construir el formulario propio en paralelo** mientras llegan los primeros registros. Cuando esté listo, lo cambio sin que el usuario note nada y migro las respuestas anteriores a la misma base.
3. Esto te permite lanzar en días en lugar de semanas, y resolver el problema de confianza y spam antes de que tengas volumen.

Si prefieres hacerlo bien desde el principio y no te importa esperar unos días más, voy directo a la opción C.

---

## 4. Lo que tú tienes que hacer (yo no puedo)

1. Crear cuenta en Cloudflare con tu correo, activar verificación en dos pasos.
2. Agregar el dominio trabajale.ai desde "Registrar dominio" dentro de Cloudflare, confirmar que el total son unos 160 USD por 2 años, y pagar.
3. Crear cuenta en GitHub (gratis) si no tienes. Es por donde publico la página sin necesidad de claves.
4. Si eliges Google Forms: crear el formulario con las preguntas que te paso en el siguiente documento, o darme acceso a tu cuenta de Google en el navegador de esta sesión y lo armo yo.

Cuando tengas el paso 1 y 2 hechos, me avisas y seguimos con la página.
