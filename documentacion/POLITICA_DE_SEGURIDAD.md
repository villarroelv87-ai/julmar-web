# Política de Seguridad de la Información

**Empresa:** Maquinarias Julmar SpA  
**Proyecto:** JulMar Web (Landing Page y Plataforma de Contacto)  
**Versión:** 1.0  
**Clasificación:** Pública / Uso Interno  

---

## 1. Introducción
La presente Política de Seguridad de la Información establece los lineamientos, controles y procedimientos para salvaguardar la confidencialidad, integridad y disponibilidad de la información gestionada a través del sitio web y canales digitales de **Maquinarias Julmar SpA**. Dado el enfoque comercial de la empresa en el rubro de maquinarias (venta, arriendo y cotizaciones), la protección de los datos de nuestros clientes, proveedores y operaciones es un pilar fundamental.

## 2. Objetivo de la Política
El objetivo principal es proteger los activos de información del proyecto "JulMar Web", estableciendo un marco de seguridad que mitigue riesgos cibernéticos, garantice la continuidad operativa y asegure el cumplimiento normativo en materia de protección de datos personales y ciberseguridad.

## 3. Alcance
Esta política aplica a:
- Toda la infraestructura tecnológica del proyecto (Frontend en React/Vite, despliegue en Vercel).
- Todos los canales de comunicación y contacto integrados (WhatsApp, formularios web, correos corporativos).
- Todo el personal interno, administradores, desarrolladores y proveedores externos (ej. servicios de hosting) con acceso a la plataforma.

## 4. Definiciones y Términos Relevantes
- **Activo de Información:** Cualquier dato, dispositivo o componente de software que tenga valor para Maquinarias Julmar SpA.
- **Incidente de Seguridad:** Evento inesperado que comprometa la confidencialidad, integridad o disponibilidad de la información.
- **XSS / CSRF / SQLi:** Tipos de vulnerabilidades web (Cross-Site Scripting, Cross-Site Request Forgery, Inyección SQL).

## 5. Marco Normativo y Buenas Prácticas Aplicables
El diseño de estos controles se inspira en:
- **ISO/IEC 27001 e ISO/IEC 27002** (Sistema de Gestión de Seguridad de la Información).
- **OWASP Top 10** (Prevención de vulnerabilidades web).
- **Ley de Protección de Datos Personales** vigente en la jurisdicción de operación.
- **NIST Cybersecurity Framework** (Identificar, Proteger, Detectar, Responder, Recuperar).

## 6. Roles y Responsabilidades
| Rol | Responsabilidad |
|-----|----------------|
| **Administrador TI / DevOps** | Gestión del hosting en Vercel, configuración de dominios, despliegues y gestión de repositorios (GitHub). |
| **Desarrollador Web** | Implementación de código seguro, validación de formularios y sanitización de datos. |
| **Área Comercial / Atención al Cliente** | Uso seguro de canales de contacto (WhatsApp, Correo) y tratamiento confidencial de las cotizaciones de clientes. |

## 7. Clasificación de la Información
1. **Pública:** Información disponible en la web (catálogo de maquinarias, descripciones, teléfonos de contacto).
2. **Uso Interno:** Manuales de procedimiento, código fuente no publicado, configuraciones del proyecto.
3. **Confidencial:** Datos de clientes (nombres, correos, teléfonos), cotizaciones emitidas, credenciales de acceso a Vercel/GitHub.

## 8. Gestión de Activos de Información
Los principales activos identificados son:
- **Código Fuente:** Alojado en repositorio GitHub de acceso restringido.
- **Infraestructura de Hosting:** Entorno de producción y preview en Vercel.
- **Dominio y DNS:** Proveedor de dominio y registros (ej. registros MX para correo).
- **Canales de Atención:** Cuentas de correo corporativas y dispositivos móviles para WhatsApp.

## 9. Gestión de Usuarios y Control de Acceso
El acceso a los repositorios (GitHub) y al entorno de despliegue (Vercel) operará bajo el **Principio de Menor Privilegio (PoLP)**. Solo el personal técnico autorizado (`villarroelv87@gmail.com` y similares roles autorizados) tendrá permisos de escritura y despliegue en producción.

## 10. Política de Contraseñas
- Las credenciales para plataformas críticas (GitHub, Vercel, proveedor de correo) deben tener mínimo 12 caracteres, combinar alfanuméricos y símbolos.
- **Obligatorio:** Uso de Autenticación Multifactor (MFA/2FA) para todos los accesos administrativos.
- Prohibida la compartición de cuentas entre empleados.

## 11. Autenticación y Autorización
La autenticación para la modificación de la web delega en proveedores seguros (OAuth mediante GitHub en Vercel). No se implementarán sistemas de login de usuarios finales en la Landing Page actual, minimizando el riesgo de exposición de credenciales de clientes.

## 12. Protección de Datos Personales
Se recolectan únicamente los datos estrictamente necesarios para el giro del negocio (cotización y contacto comercial): Nombre, Correo, Teléfono y Empresa. Su tratamiento se rige por la Política de Privacidad pública.

## 13. Protección de Datos Sensibles
**Maquinarias Julmar SpA NO recopila datos sensibles** (información financiera, médica, ideológica o contraseñas) a través de la web pública. Se prohíbe explícitamente a los clientes el envío de información bancaria por canales no encriptados.

## 14. Privacidad de Usuarios
Todo usuario tiene derecho a solicitar la eliminación, modificación o conocimiento de sus datos enviados a través de nuestros canales, dirigiéndose al correo de contacto oficial.

## 15. Seguridad de Formularios Web
Los formularios integrados en la landing page deben contar con:
- **Validación del lado del cliente** (HTML5/React) y **del lado del servidor** (si aplica API).
- Sanitización de entradas para evitar Cross-Site Scripting (XSS).
- Protección contra bots mediante CAPTCHA, reCAPTCHA o honeypots invisibles.

## 16. Seguridad de Bases de Datos
Actualmente, la plataforma opera bajo un modelo estático/JAMstack conectado a servicios de terceros. De integrarse una base de datos a futuro, deberá contar con encriptación en reposo (AES-256), accesos limitados por IP y credenciales rotativas.

## 17. Seguridad del Hosting y la Infraestructura
- **Plataforma:** Vercel.
- **Protección DDoS:** Automática a nivel de CDN provista por Vercel (Edge Network).
- Todo el tráfico se enruta de forma segura y distribuida globalmente, garantizando alta disponibilidad.

## 18. Seguridad de APIs e Integraciones
Las llaves de API (API Keys) requeridas para analíticas o servicios de terceros jamás deben ser expuestas en el frontend salvo que estén diseñadas para uso público (ej. llaves de Google Maps). Todo secreto debe manejarse mediante las Variables de Entorno de Vercel.

## 19. Cifrado de Información en Tránsito y en Reposo
- **En tránsito:** Todo tráfico hacia `JulMar Web` es forzado a **HTTPS** con certificados TLS/SSL generados y renovados automáticamente por Vercel.
- **En reposo:** Los repositorios de código y datos almacenados en servicios en la nube utilizan los estándares de cifrado nativos de los proveedores.

## 20. Respaldo y Recuperación de Información
El código fuente está respaldado mediante control de versiones distribuido (Git). Ante una caída de producción, se puede realizar un "Rollback" instantáneo desde el panel de Vercel a un despliegue anterior seguro.

## 21. Disponibilidad y Continuidad Operacional
Se confía en el SLA de la infraestructura Edge de Vercel (>99.9%). En caso de falla global del proveedor, el código alojado en GitHub permite desplegar la web estática en alternativas como Netlify o Cloudflare Pages en menos de 30 minutos.

## 22. Gestión de Vulnerabilidades
Se ejecutará regularmente el comando `npm audit` para identificar vulnerabilidades en las dependencias de React/Vite (ej. Chart.js, Tailwind). Los reportes críticos deben ser solventados en el próximo ciclo de desarrollo.

## 23. Gestión de Parches y Actualizaciones
Las actualizaciones del entorno de construcción (Vite) y librerías frontend se programarán mensualmente, probándose primero en el entorno de "Preview" (Staging) de Vercel antes de fusionar a la rama `main`.

## 24. Registro, Monitoreo y Auditoría
Los despliegues, errores de construcción y métricas de tráfico básicas son monitorizados a través del panel de Vercel. El acceso a estos registros (logs) está limitado a los roles administrativos.

## 25. Gestión de Incidentes de Seguridad
Ante una brecha (ej. defacement, secuestro de dominio):
1. **Contención:** Deshabilitar el despliegue automático o cambiar contraseñas de Vercel/Registrador de Dominio.
2. **Evaluación:** Identificar la vulnerabilidad (fuga de credencial, librería vulnerable).
3. **Recuperación:** Desplegar versión limpia.
4. **Notificación:** Informar a los afectados si datos personales fueron comprometidos.

## 26. Seguridad Física
No aplica infraestructura de servidores on-premise. Los equipos de cómputo del personal comercial y de desarrollo deben contar con bloqueo automático de pantalla, cifrado de disco (BitLocker/FileVault) y antivirus actualizado.

## 27. Gestión de Terceros y Proveedores
Los proveedores de servicios cloud (GitHub, Vercel) deben cumplir con estándares reconocidos de la industria (SOC 2, ISO 27001).

## 28. Capacitación y Concientización
El personal comercial que gestiona las cotizaciones recibirá inducción semestral sobre detección de Phishing, uso de contraseñas seguras y manejo cuidadoso de datos de clientes.

## 29. Retención y Eliminación de Datos
Los datos de contacto y cotizaciones recibidas se mantendrán únicamente por el tiempo necesario para cumplir la relación comercial y exigencias tributarias/legales locales, tras lo cual serán eliminados de forma segura.

## 30. Revisión y Actualización de la Política
Este documento será revisado de forma anual o cuando ocurran cambios significativos en la arquitectura web o el modelo de negocio.

## 31. Sanciones y Consecuencias por Incumplimiento
El incumplimiento intencional de estas medidas por parte de empleados o proveedores podrá derivar en la revocación de accesos, sanciones administrativas o acciones legales según la gravedad del incidente.

---

## SECCIÓN ESPECÍFICA: SEGURIDAD DE CANALES DE CONTACTO

### Correos Electrónicos y Enlaces `mailto:`
- **Riesgos asociados:** Phishing, Spoofing de dominio (suplantación de empresa para estafar clientes), Spam automatizado (Scraping de la web), Fuga de información.
- **Datos tratados:** Correos de clientes, nombres, requerimientos de maquinaria.
- **Medidas de Protección (Técnicas):**
  - Implementación estricta de registros DNS de seguridad en el dominio:
    - **SPF (Sender Policy Framework):** Autoriza únicamente a los servidores de correo oficiales de JulMar a enviar correos en nombre del dominio.
    - **DKIM (DomainKeys Identified Mail):** Firma digital de correos salientes para garantizar que no fueron alterados en tránsito.
    - **DMARC:** Política configurada en `p=quarantine` o `p=reject` para indicar a los receptores qué hacer con correos falsificados que usen el dominio de Maquinarias Julmar SpA.
- **Restricciones y Directrices:**
  - Los botones de tipo `mailto:` en la web **no incluirán información sensible** precargada. Los asuntos precargados serán estrictamente genéricos (Ej: `?subject=Cotización de Maquinaria`).
  - Los cuerpos de correo precargados no deben contener datos personales.
  - Se instruirá explícitamente a los usuarios para que **no envíen contraseñas, números de tarjetas de crédito ni datos financieros** por correo electrónico a menos que exista un canal de facturación seguro autorizado.
- **Monitoreo:** Revisiones periódicas de actividad sospechosa en los buzones y políticas estrictas de retención (eliminación periódica de correos con datos de clientes inactivos).

### WhatsApp y Enlaces `wa.me`
El uso de WhatsApp se establece como un canal rápido de contacto comercial, pero con riesgos inherentes de terceros.
- **Riesgos asociados:** Privacidad (WhatsApp pertenece a Meta, un tercero), Ingeniería Social (suplantación del vendedor), Robo de dispositivos móviles corporativos, Fuga de información.
- **Tratamiento de Datos:** Las conversaciones son consideradas confidenciales y para uso exclusivo comercial.
- **Recomendaciones para Botones Flotantes y Enlaces `wa.me`:**
  - **Mensajes Precargados:** Cualquier enlace `wa.me` o botón flotante usará textos predefinidos **100% genéricos** (Ej: `Hola, me interesa cotizar una maquinaria que vi en el sitio web`).
  - **Prohibiciones:** Los enlaces no pueden prellenar RUT, direcciones, teléfonos adicionales, datos médicos, financieros, contraseñas ni información sensible.
- **Limitaciones de Responsabilidad e Información al Usuario:**
  - Se debe informar al usuario en los términos de servicio (o Política de Privacidad) que WhatsApp es un canal operado por un tercero (Meta Platforms Inc.), y su uso implica la aceptación de las políticas de dicho proveedor.
  - **Recomendación a clientes:** Se recomienda a los usuarios **no enviar información sensible, copias de documentos de identidad no requeridos, ni datos financieros** por dicho canal. Las cotizaciones formales y transferencias deben manejarse por canales institucionales verificados.
- **Gestión Interna:** Los dispositivos móviles que operen WhatsApp corporativo deben tener PIN de acceso, bloqueo biométrico y estar sujetos a borrado remoto mediante MDM o herramientas nativas en caso de pérdida/robo.

---

## SECCIÓN ESPECÍFICA: SEGURIDAD DE LANDING PAGE

Considerando la arquitectura (React/Vite desplegado en Vercel), se establecen los siguientes controles:
- **HTTPS/TLS y Certificados Digitales:** Implementación forzada en toda la plataforma gestionada automáticamente por Vercel.
- **Protección contra XSS (Cross-Site Scripting):** React sanitiza automáticamente las variables antes de renderizarlas. Se prohíbe el uso de `dangerouslySetInnerHTML` salvo casos auditados y justificados.
- **Protección contra Inyección (SQL/NoSQL):** Dado que la web es estática, el riesgo directo es nulo. Para futuras integraciones de API, se usarán ORMs o consultas parametrizadas obligatorias.
- **Protección contra CSRF y Clickjacking:** Se implementarán cabeceras de seguridad (ver Políticas HTTP abajo).
- **Protección contra Bots y Spam:** Los formularios contarán con desafíos técnicos invisibles. Vercel Edge Network mitiga ataques básicos de escaneo de vulnerabilidades.
- **Gestión de Cookies y Consentimiento:** Si se incluyen herramientas de analítica (ej. Google Analytics, Pixel), se debe desplegar un banner de gestión de consentimiento de cookies, informando la finalidad (estadística o publicitaria).

### Políticas de Seguridad HTTP (Cabeceras)
Se debe incluir en el archivo `vercel.json` o configuración de servidor las siguientes cabeceras recomendadas:
- **HSTS (Strict-Transport-Security):** Forzar conexión segura (min 1 año).
- **X-Frame-Options:** `DENY` o `SAMEORIGIN` para evitar ataques de Clickjacking.
- **X-Content-Type-Options:** `nosniff`.
- **Referrer-Policy:** `strict-origin-when-cross-origin` para proteger metadatos de la URL.
- **Content Security Policy (CSP):** Restringir fuentes de scripts e imágenes a orígenes de confianza (analíticas, CDNs aprobados).
- **Permissions-Policy:** Deshabilitar acceso a micrófono, cámara y geolocalización si la web no los requiere.

---

## SECCIÓN ESPECÍFICA: MATRIZ DE RIESGOS

| Riesgo Identificado | Activo Afectado | Probabilidad | Impacto | Nivel de Riesgo | Control Existente | Control Recomendado | Responsable |
|---------------------|-----------------|--------------|---------|-----------------|-------------------|---------------------|-------------|
| Extracción masiva de correos (Scraping) | Landing Page / Emails | Alta | Medio | **Medio** | Ninguno / Texto Plano | Ocultar correo en código (ofuscar `mailto`), priorizar formularios con anti-bot. | Dev Web |
| Robo de cuenta GitHub/Vercel (Ataque a Desarrollador) | Repositorio / Hosting | Media | Crítico | **Alto** | Contraseña | Habilitar MFA obligatorio en Vercel y GitHub. | Admin TI |
| Fuga de información confidencial de clientes por WhatsApp | Canales de Atención | Media | Alto | **Medio-Alto** | Política de buena fe | Prohibir solicitud de tarjetas o datos por WhatsApp. Dispositivo con PIN. | Atención al Cliente |
| Inyección de Scripts Maliciosos (XSS) en formularios | Navegador del Cliente | Baja | Alto | **Medio** | React sanitize | Auditoría de dependencias, no usar `dangerouslySetInnerHTML`. | Dev Web |
| Suplantación de Dominio para Phishing (Envío de cotizaciones falsas) | Reputación Corporativa | Media | Crítico | **Alto** | Ninguno | Configurar SPF, DKIM y DMARC en proveedor de dominio. | Admin TI |
| Caída del sitio por tráfico inusual (DDoS básico) | Infraestructura Web | Media | Bajo | **Bajo** | CDN Vercel por defecto | Mantener Vercel activo; monitoreo de métricas. | DevOps |

---

## SECCIÓN ESPECÍFICA: RECOMENDACIONES PRIORITARIAS DE IMPLEMENTACIÓN

### Prioridad Alta
1. **Acción:** Configurar registros DNS SPF, DKIM y DMARC para los correos de JulMar.
   - **Justificación:** Prevenir suplantación de identidad; evitar que cotizaciones falsas engañen a clientes usando el nombre de la empresa.
   - **Riesgo mitigado:** Spoofing, Phishing corporativo, pérdida de confianza.
   - **Complejidad:** Baja (Requiere acceso al panel DNS del dominio).

2. **Acción:** Habilitar Autenticación de Dos Factores (MFA) para GitHub, Vercel y cuentas de correo.
   - **Justificación:** Previene toma de control de la infraestructura y código fuente.
   - **Riesgo mitigado:** Robo de credenciales, Defacement de la web.
   - **Complejidad:** Muy Baja (Configuración en perfiles de usuario).

### Prioridad Media
3. **Acción:** Integrar cabeceras de seguridad HTTP (`X-Frame-Options`, `HSTS`, `CSP`) en el archivo `vercel.json`.
   - **Justificación:** Aumenta exponencialmente el nivel de protección técnica del frontend sin costo adicional.
   - **Riesgo mitigado:** Clickjacking, Sniffing, XSS de terceros.
   - **Complejidad:** Baja (Edición de archivo JSON).

4. **Acción:** Definir e implementar el Banner de Cookies si la web utiliza Analytics o Pixels.
   - **Justificación:** Cumplimiento normativo de protección de datos y transparencia comercial.
   - **Riesgo mitigado:** Multas, advertencias legales.
   - **Complejidad:** Media (Integración de script de terceros).

### Prioridad Baja
5. **Acción:** Ofuscar los correos electrónicos publicados en la Landing Page o sustituirlos definitivamente por Formularios protegidos.
   - **Justificación:** Reduce drásticamente la cantidad de correos Spam recibidos por fuerza bruta o bots de scraping.
   - **Riesgo mitigado:** Saturación de buzones comerciales.
   - **Complejidad:** Baja.

---
*Documento preparado y estructurado para Maquinarias Julmar SpA. Prohibida su reproducción sin autorización de la gerencia.*
