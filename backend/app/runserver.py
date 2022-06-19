from app import app
import sys

from users.views import users
from auth.views import auth
from tasks.views import tasks
from elements.views import elements

app.register_blueprint(users, url_prefix='/users')
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(tasks, url_prefix='/tasks')
app.register_blueprint(elements, url_prefix='/elements')

# Sets the port, or defaults to 80
if (len(sys.argv) > 1):
    port = int(sys.argv[1])
else:
    port=80

app.run(debug=True, host='127.0.0.1', port=port)
