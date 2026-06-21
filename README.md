# mi-app-web-fintech-node


# COnstruir la imagen

docker build -t dacl010821/mi-app-web-fintech-node:2.0.0 .

# subir la imagen

docker push dacl010821/mi-app-web-fintech-node:2.0.0

# crear el dépliegue en el clúster de kubernetes

kubectl apply -f mi-app-web-fintech-node-deployment.yaml

# crear el servicio en el clúster de kubernetes

kubectl apply -f mi-app-web-fintech-node-service.yaml

# verificar que el servicio esté corriendo

kubectl get services
