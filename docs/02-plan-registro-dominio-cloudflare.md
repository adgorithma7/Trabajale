# Plan paso a paso: registrar trabajale.ai en Cloudflare

Tiempo estimado: 25 a 35 minutos. Costo esperado: unos 160 USD por 2 años. Confirma el total en pantalla antes de pagar.

Todo lo haces tú con tu correo y tu tarjeta. Yo no toco cuentas ni pagos.

---

## Antes de empezar: ten a mano

- Un correo que controles tú o tu empresa, idealmente no personal (ejemplo: admin@tuempresa.com o un Gmail creado solo para el proyecto). Este correo será el dueño de todo.
- Tu teléfono con una app de autenticación instalada: Google Authenticator, Microsoft Authenticator o Authy. Es para la verificación en dos pasos.
- Tarjeta de crédito o débito, o cuenta PayPal.
- Datos del titular del dominio: nombre completo o razón social, dirección postal, teléfono. Son obligatorios por reglas de los registros de dominios. Cloudflare los oculta del público sin costo.

---

## Fase 1: Cuenta de Cloudflare (10 min)

**Paso 1. Crear la cuenta**
Entra a https://dash.cloudflare.com/sign-up con el correo del proyecto. Usa una contraseña larga y única, generada por un gestor de contraseñas si tienes.

**Paso 2. Verificar el correo**
Cloudflare envía un enlace de verificación. Ábrelo. Sin esto no podrás comprar.

**Paso 3. Activar verificación en dos pasos**
Arriba a la derecha, ícono de perfil, "My Profile", pestaña "Authentication". Activa "Two-Factor Authentication" con la app de autenticación. Cloudflare te mostrará códigos de respaldo: guárdalos en un lugar seguro fuera del teléfono. Si pierdes el teléfono sin esos códigos, pierdes el acceso al dominio.

**Paso 4. Agregar método de pago**
Menú lateral, "Manage Account", "Billing", "Payment Info". Agrega la tarjeta o PayPal. Cloudflare no cobra nada en este paso.

---

## Fase 2: Comprar el dominio (10 min)

**Paso 5. Buscar el dominio**
Menú lateral, "Domain Registration", "Register Domains". Escribe `trabajale.ai` y busca.

**Paso 6. Confirmar precio ANTES de pagar**
Cloudflare mostrará el precio por año. Verifica:
- Que diga aproximadamente 80 USD por año.
- Que el período sea 2 años (mínimo del .ai). El total debe rondar 160 USD.
- Si el precio es mayor a 170 USD, detente y avísame antes de pagar. Puede haber cambiado o estar marcado como dominio premium.

**Paso 7. Llenar datos del titular**
Nombre, organización (opcional), dirección, teléfono, correo. Deben ser reales: el registro puede pedir verificación. La casilla de privacidad WHOIS viene activada; déjala así.

**Paso 8. Pagar**
Revisa el resumen y confirma. Al terminar, el dominio aparece automáticamente en tu panel de Cloudflare, con el DNS ya configurado. No hay que hacer nada más con el dominio.

Recibirás un correo de confirmación. Si te llega otro correo pidiendo "verificar la dirección del titular", hazlo dentro de los 15 días o el dominio se suspende.

---

## Fase 3: Configuración mínima de seguridad (5 min)

**Paso 9. Activar renovación automática**
"Domain Registration", "Manage Domains", clic en trabajale.ai. Verifica que "Auto-renew" esté activado. Así no pierdes el dominio por olvido en 2028.

**Paso 10. Activar bloqueo de transferencia**
En la misma pantalla, "Transfer Lock" debe estar activado. Evita que alguien se lleve el dominio a otro registrador sin tu autorización.

**Paso 11. Avisarme**
Escríbeme "dominio comprado" y seguimos. No necesito que me pases ninguna clave ni acceso a Cloudflare.

---

## Fase 4: Cuenta de GitHub (5 min, se puede hacer en otro momento)

Esta cuenta es por donde publico la página. El código vive en un repositorio tuyo, Cloudflare lo lee de ahí y publica cada cambio automáticamente. Así nunca intercambiamos claves.

**Paso 12.** Entra a https://github.com/signup con el mismo correo del proyecto. Plan gratuito.

**Paso 13.** Activa verificación en dos pasos: "Settings", "Password and authentication", "Two-factor authentication". Misma app del teléfono.

**Paso 14.** Avísame el nombre de usuario que elegiste. Nada más.

---

## Lo que sigue después de esto

Cuando tengas dominio y GitHub listos, yo:
1. Creo el proyecto de la página en esta carpeta.
2. Te doy 3 pasos para conectar el repositorio con Cloudflare Pages (desde tu cuenta, 5 minutos).
3. Publico la página en trabajale.ai con certificado de seguridad automático.
4. Configuro desde tu panel, guiándote, el correo hola@trabajale.ai con redirección gratuita a tu Gmail.

---

## Resumen de cuentas que quedarán a tu nombre

| Cuenta | Para qué | Costo | Verificación en dos pasos |
|---|---|---|---|
| Cloudflare | Dominio, hosting, correo, métricas | 160 USD / 2 años | Sí, obligatoria |
| GitHub | Código de la página y publicación automática | 0 | Sí, obligatoria |
| Google (ya existente o nueva) | Formulario y hoja de cálculo de registros | 0 | Sí, recomendada |
| WhatsApp Business | Contacto con candidatos | 0 | Activar "Verificación en dos pasos" en ajustes de la app |
