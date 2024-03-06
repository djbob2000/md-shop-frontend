export default function AlertServer() {
  return (
    <Alert className="max-w-lg">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Attention! / Увага!</AlertTitle>
      <AlertDescription>
        The backend is hosted on a free server, so it goes to sleep when
        inactive. Waking up usually takes 20-50 seconds. Be patient.
        <br />
        <br />
        Бекенд розташований на безплатному сервері, тому під час бездіяльності
        засинає. Пробудження займає зазвичай 20-50 секунд. Наберіться терпіння.
      </AlertDescription>
    </Alert>
  );
}
