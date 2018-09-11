defmodule LightNovelServerWeb.PageController do
  use LightNovelServerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
