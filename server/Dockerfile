FROM elixir:alpine
RUN mix local.hex --force \
    && mix deps.get --force
ENTRYPOINT ["iex", "-S", "mix", "phx.server"]