# airbnb clone

Inspired by [name]

Note if you have access to [Tailwind UI](https://tailwindui.com), you can follow the following steps to add it:

1. Install `@tailwindcss/ui`:

```sh
npm i
```

2. Add the plugin in `tailwind.config.js` without changing anything else:

```js
//

```
      // {(location.pathname !== '/' && location.pathname !== '/sign_up') && (     )}


## Installation

```sh
npm i
```

## Development

```sh
npm run dev
```

## Build

```sh
npm run  build
```
        <Route
          path="/cars/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/reserve"
          element={(
            <PrivateRoutes>
              <Reserve />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations"
          element={(
            <PrivateRoutes>
              <MyReservations />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />

     ``` {user && user.id && (
        <div className="flex justify-center items-center flex-col">
          <img alt={user.name} src={user.photo} className="p-1 w-20 h-20 object-cover rounded-full ring-2 ring-gray-300" />
          <h2 className="pt-3">{user.name}</h2>
          <h2 className="text-sm">{user.email}</h2>
        </div>
      )}```

```
  <Route
    path="/add_car"
    element={(
      <PrivateRoutes requiresAdmin>
        <AddHouseForm />
      </PrivateRoutes>
    )}
  />
  <Route
    path="/delete_car"
    element={(
      <PrivateRoutes requiresAdmin>
        <DeleteHouse />
      </PrivateRoutes>
    )}
  />
```
