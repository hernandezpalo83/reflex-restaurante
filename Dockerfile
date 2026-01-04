# Usamos una imagen ligera de Python
FROM python:3.11-slim

# Instalamos dependencias del sistema necesarias para Reflex
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de requerimientos e instalamos
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código de tu proyecto
COPY . .

# Inicializamos Reflex (crea la estructura necesaria si no existe)
RUN reflex init

# Exponemos los puertos: 3000 (Frontend) y 8000 (Backend/API)
# Render usará el puerto que definamos en la variable de entorno PORT
EXPOSE 3000 8000

# Comando para ejecutar la app en modo producción
# --env prod optimiza el rendimiento
CMD ["reflex", "run", "--env", "prod", "--backend-host", "0.0.0.0"]
