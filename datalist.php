
<?php 
	header('content-type: application/json; charset=utf-8');
	$dataSet=$_GET["dataSet"]; 
	$data=$_POST;
	$database="jamesowe_frontendsampledata";
	$username="jamesowe_fesd";
	$password="!2#4%6&8(0";
	
	mysql_connect(localhost,$username,$password);
	@mysql_select_db($database) or die( "Unable to select database");
	
	
	if ($_SERVER['REQUEST_METHOD'] === 'GET' && $dataSet != "") {
		$test_data = mysql_query("select * FROM ".$dataSet)
		or die(mysql_error()); 
		

		while ($row = mysql_fetch_assoc($test_data)) {
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
				$sql = mysql_query("UPDATE ".$cleanSQL['collection']." 
				SET name='".$cleanSQL['name']."',rating='".$cleanSQL['rating']."' WHERE ID=".$cleanSQL['ID']) 
				or die(mysql_error());
			}
			
			if($cleanSQL['action'] == 'insert')	{
				$sql = mysql_query("INSERT INTO ".$cleanSQL['collection']." (name, rating) 
				VALUES ('".$cleanSQL['name']."','".$cleanSQL['rating']."')") 
				or die(mysql_error());
				
				
				$lastID = mysql_query("SELECT ID FROM ".$cleanSQL['collection']." 
				WHERE ID=(SELECT max(ID) FROM ".$cleanSQL['collection'].")")
				 
				or die(mysql_error());
				
				
				while ($row = mysql_fetch_assoc($lastID)) {
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
				mysql_query($sql);
			}
		}
	} 
	
	mysql_close();
	
	

?>
