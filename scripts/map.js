<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

function initMap() {
    // Создание объекта геокодера
    var geocoder = new google.maps.Geocoder();

    // Определение адреса
    var address = "191186, Санкт-Петербург, Невский переулок, д. 3";

    // Геокодирование адреса для получения координат
    geocoder.geocode({ address: address }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // Получение координат
        var location = results[0].geometry.location;

        // Создание объекта карты
        var map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 10
        });

        // Создание маркера для вашего блока
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Ваш блок'
        });
      } else {
        alert('Ошибка геокодирования: ' + status);
      }
    });
  }

  window.onload = function() {
    initMap();
  }