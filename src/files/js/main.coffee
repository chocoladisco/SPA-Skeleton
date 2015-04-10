socket = io.connect '::8081'

socket.on 'render', (data) ->
	console.log data
	$('#view').empty()
	$('#view').html(data)