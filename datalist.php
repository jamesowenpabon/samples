
<?php 
	header('content-type: application/json; charset=utf-8');
	$dataSet=$_GET["dataSet"]; 
	$data=$_POST;
	
	//comment here nnn
	
	//ScaredChicken DB Info
	$servername = getenv('IP');
	$database="jamesowe_frontendsampledata";
	$username="jamesowe_fesd";
	$password="!2#4%6&8(0";
	$conn = mysqli_connect($servername,$username,$password,$database);
	
	//Cloud 9
	//$servername = getenv('IP');
    //$username = getenv('C9_USER');
    //$password = "";
    //$database = "c9";
    //$dbport = 3306;
    //$conn = mysqli_connect($servername, $username, $password, $database, $dbport);
	
	
	
	@mysqli_select_db($conn, $database) or die( "Unable to select database");
	
	
	if ($_SERVER['REQUEST_METHOD'] === 'GET' && $dataSet != "") {
		$test_data = mysqli_query($conn, "select * FROM ".$dataSet)
		or die(mysqli_error()); 

		while ($row = mysqli_fetch_assoc($test_data)) {
			$testDataArray[] = $row;
		}
		
		$arrayLength = count($testDataArray) ;
		
		$json_output = '{"records":[';
		$counter=1;
		foreach ($testDataArray as $value)    {
			
			$json_output .=  '{"name":"'.$value['name'].'","rating":'.$value['rating'].',"ID":'.$value['ID'].'}';
			if($counter < $arrayLength)	{
				$json_output .= ',';
				$counter++;
			}
		}
		$json_output .= ']}';
		echo $json_output;
		
	}
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST')	{
		
		$myData = json_decode($_POST['data']);
		
		if ($myData)	{
			$sqlData = (array)$myData;
			$cleanSQL = preg_replace('#[^A-Za-z0-9\s]#', '', $sqlData);
			
			if($cleanSQL['action'] == 'update')	{
				$sql = mysqli_query($conn, "UPDATE ".$cleanSQL['collection']." 
				SET name='".$cleanSQL['name']."',rating='".$cleanSQL['rating']."' WHERE ID=".$cleanSQL['ID']) 
				or die(mysqli_error());
			}
			
			if($cleanSQL['action'] == 'insert')	{
				$sql = mysqli_query($conn, "INSERT INTO ".$cleanSQL['collection']." (name, rating) 
				VALUES ('".$cleanSQL['name']."','".$cleanSQL['rating']."')") 
				or die(mysqli_error());
				
				
				$lastID = mysqli_query($conn, "SELECT ID FROM ".$cleanSQL['collection']." 
				WHERE ID=(SELECT max(ID) FROM ".$cleanSQL['collection'].")")
				 
				or die(mysqli_error());
				
				
				while ($row = mysqli_fetch_assoc($lastID)) {
					$lastIDRow[] = $row;
				}
				
				foreach ($lastIDRow as $value)    {
					echo $value['ID'];
				}
			}
		
			if($cleanSQL['action'] == 'remove')	{
				//echo "in remove---";
				$sql = "DELETE FROM ".$cleanSQL['collection']." WHERE ID=".$cleanSQL['ID'];
				//echo $sql;
				mysqli_query($conn, $sql);
			}
		}
	} 
	
	mysqli_close($conn);
	
	

?>
